const cropStages = {
    'Wheat': [
        {
            stage: 'Sowing & Germination',
            duration: '15',
            description: 'Initial growth phase',
            tasks: ['Land preparation', 'Sowing', 'Initial irrigation']
        },
        {
            stage: 'Vegetative Growth',
            duration: '45',
            description: 'Leaf and stem development',
            tasks: ['Weed management', 'Fertilizer application']
        },
        {
            stage: 'Flowering',
            duration: '30',
            description: 'Reproductive stage',
            tasks: ['Critical irrigation']
        },
        {
            stage: 'Maturity & Harvest',
            duration: '25',
            description: 'Ripening phase',
            tasks: ['Harvest']
        }
    ]
};

const irrigationSchedule = {
    'Wheat': [
        { stage: 'Crown Root Initiation', days: 21, description: 'Most critical stage' },
        { stage: 'Tillering', days: 40, description: 'Vegetative phase' },
        { stage: 'Jointing', days: 60, description: 'Stem elongation' },
        { stage: 'Flowering', days: 80, description: 'Grain setting' }
    ]
};

const fertilizerSchedule = {
    'Wheat': [
        { stage: 'Basal', days: 0, fertilizer: 'DAP + Urea', quantity: '50kg', description: 'During sowing' },
        { stage: 'First Top Dressing', days: 21, fertilizer: 'Urea', quantity: '40kg', description: 'With first irrigation' }
    ]
};

const pestManagement = {
    'Wheat': [
        { pest: 'Termites', stage: 'Seedling', symptoms: 'Yellowing plants', treatment: 'Chlorpyriphos', prevention: 'Seed treatment' }
    ]
};

module.exports = {
    cropStages,
    irrigationSchedule,
    fertilizerSchedule,
    pestManagement
};
