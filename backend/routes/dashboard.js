const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');
const {
    cropStages,
    irrigationSchedule,
    fertilizerSchedule,
    pestManagement
} = require('../data/dashboard');

const defaultStages = [
    {
        stage: 'Sowing & Germination',
        duration: '15 days',
        description: 'Initial growth phase',
        tasks: ['Land preparation', 'Sowing', 'Initial irrigation'],
        completed: true
    },
    {
        stage: 'Vegetative Growth',
        duration: '45 days',
        description: 'Leaf and stem development',
        tasks: ['Weed management', 'Fertilizer application', 'Monitor pests'],
        completed: false,
        current: true
    },
    {
        stage: 'Flowering/Head Development',
        duration: '30 days',
        description: 'Reproductive stage',
        tasks: ['Critical irrigation', 'Nutrient management'],
        completed: false
    },
    {
        stage: 'Maturity & Harvest',
        duration: '25 days',
        description: 'Ripening phase',
        tasks: ['Stop irrigation', 'Check maturity', 'Harvest'],
        completed: false
    }
];

const defaultIrrigation = [
    { stage: 'Initial Stage', days: 10, description: 'Life saving irrigation' },
    { stage: 'Vegetative', days: 30, description: 'Growth support' },
    { stage: 'Reproductive', days: 60, description: 'Critical moisture period' },
    { stage: 'Maturity', days: 90, description: 'Final irrigation' }
];

const defaultFertilizer = [
    { stage: 'Basal', days: 0, fertilizer: 'NPK', quantity: 'Standard dose', description: 'At time of sowing' },
    { stage: 'Top Dressing', days: 40, fertilizer: 'Urea', quantity: 'Standard dose', description: 'During active growth' }
];

const defaultPest = [
    { pest: 'General Pests', stage: 'All Stages', symptoms: 'Leaf damage, wilting', treatment: 'Neem Oil', prevention: 'Clean cultivation' }
];

const recalculateCropStatus = (crop) => {
    const stages = cropStages[crop.name] || defaultStages;
    const totalDuration = stages.reduce((acc, stage) => acc + parseInt(stage.duration), 0);

    const planted = new Date(crop.plantedDate);
    const today = new Date();
    const daysSincePlanting = Math.floor((today - planted) / (1000 * 60 * 60 * 24));

    let progress = Math.min(100, Math.max(0, Math.round((daysSincePlanting / totalDuration) * 100)));

    let currentStage = 'Planting';
    let accumulatedDays = 0;
    let nextAction = 'Monitor Crop';
    let nextActionDate = new Date(Date.now() + 86400000); // Default tomorrow

    for (const stage of stages) {
        accumulatedDays += parseInt(stage.duration);
        if (daysSincePlanting <= accumulatedDays) {
            currentStage = stage.stage;
            if (stage.tasks && stage.tasks.length > 0) {
                nextAction = stage.tasks[0];
                nextActionDate = new Date(planted.getTime() + (accumulatedDays - parseInt(stage.duration) / 2) * 86400000);
            }
            break;
        }
    }

    if (daysSincePlanting > accumulatedDays) {
        currentStage = 'Harvested';
        progress = 100;
        nextAction = 'Post-harvest processing';
    }

    return {
        ...crop.toObject(),
        currentStage,
        progress,
        nextAction,
        nextActionDate
    };
};

router.get('/farmer-crops', async (req, res) => {
    const userId = req.headers['x-user-id'];

    if (!userId) return res.status(400).json({ message: 'User ID is required' });

    try {
        const crops = await Crop.find({ userId });
        const updatedCrops = crops.map(crop => recalculateCropStatus(crop));
        res.json(updatedCrops);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/farmer-crops', async (req, res) => {
    const userId = req.headers['x-user-id'];
    const { name, variety, plantedDate, area } = req.body;

    if (!userId || !name || !plantedDate) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const stages = cropStages[name] || defaultStages;
        const totalDuration = stages.reduce((acc, stage) => acc + parseInt(stage.duration), 0);

        const planted = new Date(plantedDate);
        const harvestDate = new Date(planted);
        harvestDate.setDate(planted.getDate() + totalDuration);

        const image = name.toLowerCase().includes('wheat')
            ? 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=400'
            : name.toLowerCase().includes('maize') || name.toLowerCase().includes('corn')
                ? 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400'
                : name.toLowerCase().includes('rice') || name.toLowerCase().includes('paddy')
                    ? 'https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg?auto=compress&cs=tinysrgb&w=400'
                    : 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400';

        const crop = await Crop.create({
            userId,
            name,
            variety: variety || 'Standard',
            plantedDate,
            expectedHarvest: harvestDate,
            area: area || '1 hectare',
            image,
            nextAction: 'Check Growth',
            nextActionDate: new Date(Date.now() + 86400000 * 2)
        });

        const updatedCrop = recalculateCropStatus(crop);
        res.status(201).json(updatedCrop);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/stages/:cropName', (req, res) => {
    const stages = cropStages[req.params.cropName] || defaultStages;
    res.json(stages);
});

router.get('/schedules/:cropName', (req, res) => {
    const { cropName } = req.params;
    const irrigation = irrigationSchedule[cropName] || defaultIrrigation;
    const fertilizer = fertilizerSchedule[cropName] || defaultFertilizer;
    res.json({ irrigation, fertilizer });
});

router.get('/pest-management/:cropName', (req, res) => {
    const pestBase = pestManagement[req.params.cropName] || defaultPest;
    res.json(pestBase);
});

module.exports = router;
