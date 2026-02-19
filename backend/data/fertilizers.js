const cropsList = [
    'Wheat',
    'Rice',
    'Maize',
    'Cotton',
    'Sugarcane'
];

const fertilizerRecommendations = {
    'Wheat': {
        basal: [
            { name: 'DAP', quantity: '55 kg/acre', timing: 'At sowing' },
            { name: 'Urea', quantity: '25 kg/acre', timing: 'At sowing' }
        ],
        topDressing: [
            { name: 'Urea', quantity: '30 kg/acre', timing: 'First irrigation (CRI stage)' },
            { name: 'Urea', quantity: '25 kg/acre', timing: 'Second irrigation (Tillering)' }
        ],
        tips: [
            'Apply Zinc Sulphate if soil is deficient',
            'Avoid mixing Urea with seeds directly'
        ]
    }
};

module.exports = {
    cropsList,
    fertilizerRecommendations
};
