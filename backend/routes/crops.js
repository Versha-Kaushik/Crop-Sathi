const express = require('express');
const router = express.Router();
const { soilTypes, weatherConditions, cropRecommendations } = require('../data/crops');

router.get('/meta', (req, res) => {
    console.log('Serving meta');
    res.json({
        debug: true,
        soilTypes,
        weatherConditions
    });
});

router.get('/recommendations', (req, res) => {
    const { soil, weather } = req.query;

    if (!soil || !weather) {
        return res.json(cropRecommendations);
    }

    const soilData = cropRecommendations[soil];
    if (!soilData) {
        return res.status(404).json({ message: 'Soil type not found' });
    }

    const recommendations = soilData[weather];
    if (!recommendations) {
        return res.status(404).json({ message: 'Weather condition not found for this soil type' });
    }

    res.json(recommendations);
});

module.exports = router;
