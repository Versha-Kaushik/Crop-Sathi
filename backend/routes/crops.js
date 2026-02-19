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
        return res.json([]);
    }

    const recommendations = soilData[weather];
    if (!recommendations) {
        return res.json([]);
    }

    res.json(recommendations);
});

module.exports = router;
