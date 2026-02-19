const express = require('express');
const router = express.Router();
const { cropsList, fertilizerRecommendations } = require('../data/fertilizers');

router.get('/crops-list', (req, res) => {
    res.json(cropsList);
});

router.get('/recommendations/:cropName', (req, res) => {
    const recommendations = fertilizerRecommendations[req.params.cropName];
    if (!recommendations) {
        return res.json({});
    }
    res.json(recommendations);
});

module.exports = router;
