const express = require('express');
const router = express.Router();
const { cropsList, fertilizerRecommendations } = require('../data/fertilizers');

router.get('/crops-list', (req, res) => {
    res.json(cropsList);
});

router.get('/recommendations/:cropName', (req, res) => {
    const recommendations = fertilizerRecommendations[req.params.cropName];
    if (!recommendations) {
        return res.status(404).json({ message: 'Recommendations not found for this crop' });
    }
    res.json(recommendations);
});

module.exports = router;
