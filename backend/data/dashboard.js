const cropStages = {
    "Wheat": [
        {
            stage: 'Sowing & Germination',
            duration: '15 days',
            description: 'Seed germination and emergence',
            tasks: ['Land preparation', 'Sowing', 'Initial irrigation'],
            completed: true
        },
        {
            stage: 'Crown Root Initiation',
            duration: '20 days',
            description: 'Critical stage for root development',
            tasks: ['First irrigation', 'Weed control'],
            completed: false
        },
        {
            stage: 'Tillering',
            duration: '25 days',
            description: 'Formation of tillers',
            tasks: ['Nitrogen application', 'Monitor for termites'],
            completed: false
        },
        {
            stage: 'Flowering & Grain Filling',
            duration: '40 days',
            description: 'Grain formation',
            tasks: ['Last irrigation', 'Monitor for rust'],
            completed: false
        },
        {
            stage: 'Maturity & Harvest',
            duration: '20 days',
            description: 'Grain hardening',
            tasks: ['Harvesting', 'Threshing'],
            completed: false
        }
    ]
};

const irrigationSchedule = {
    "Wheat": [
        { stage: 'CRI Stage', days: 21, description: 'Most critical irrigation' },
        { stage: 'Tillering', days: 45, description: 'For better tillering' },
        { stage: 'Jointing', days: 65, description: 'For stem elongation' },
        { stage: 'Flowering', days: 85, description: 'For grain setting' },
        { stage: 'Milking', days: 100, description: 'For grain filling' }
    ]
};

const fertilizerSchedule = {
    "Wheat": [
        { stage: 'Basal', days: 0, fertilizer: 'DAP & MOP', quantity: '50kg DAP, 30kg MOP per acre', description: 'At time of sowing' },
        { stage: 'CRI Stage', days: 21, fertilizer: 'Urea', quantity: '40kg per acre', description: 'With first irrigation' },
        { stage: 'Tillering', days: 45, fertilizer: 'Urea', quantity: '30kg per acre', description: 'With second irrigation' }
    ]
};

const pestManagement = {
    "Wheat": [
        { pest: 'Termites', stage: 'Seedling', symptoms: 'Yellowing of plants, roots damaged', treatment: 'Chlorpyriphos', prevention: 'Seed treatment' },
        { pest: 'Rust', stage: 'Reproductive', symptoms: 'Orange/Yellow pustules on leaves', treatment: 'Propiconazole', prevention: 'Resistant varieties' }
    ]
};

module.exports = {
    cropStages,
    irrigationSchedule,
    fertilizerSchedule,
    pestManagement
};
