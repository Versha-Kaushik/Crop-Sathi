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
    },
    'Rice': {
        basal: [
            { name: 'DAP', quantity: '50 kg/acre', timing: 'At transplanting' },
            { name: 'MOP', quantity: '25 kg/acre', timing: 'At transplanting' }
        ],
        topDressing: [
            { name: 'Urea', quantity: '30 kg/acre', timing: 'Tillering stage (20-25 days)' },
            { name: 'Urea', quantity: '20 kg/acre', timing: 'Panicle initiation (40-45 days)' }
        ],
        tips: [
            'Drain excess water before top dressing',
            'Use Neem Coated Urea for better efficiency'
        ]
    },
    'Maize': {
        basal: [
            { name: 'NPK 12:32:16', quantity: '50 kg/acre', timing: 'At sowing' },
            { name: 'Zinc Sulphate', quantity: '10 kg/acre', timing: 'At sowing' }
        ],
        topDressing: [
            { name: 'Urea', quantity: '25 kg/acre', timing: 'Knee high stage (30-35 days)' },
            { name: 'Urea', quantity: '25 kg/acre', timing: 'Tasseling stage (55-60 days)' }
        ],
        tips: [
            'Avoid waterlogging after fertilization',
            'Split urea application increases yield'
        ]
    },
    'Cotton': {
        basal: [
            { name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' },
            { name: 'MOP', quantity: '20 kg/acre', timing: 'At sowing' }
        ],
        topDressing: [
            { name: 'Urea', quantity: '30 kg/acre', timing: 'Square formation (45 days)' },
            { name: 'Urea', quantity: '30 kg/acre', timing: 'Flowering stage (75 days)' }
        ],
        tips: [
            'Foliar spray of Magnesium Sulphate prevents reddening',
            'Do not apply urea during heavy rains'
        ]
    },
    'Sugarcane': {
        basal: [
            { name: 'DAP', quantity: '75 kg/acre', timing: 'At planting' },
            { name: 'MOP', quantity: '40 kg/acre', timing: 'At planting' }
        ],
        topDressing: [
            { name: 'Urea', quantity: '45 kg/acre', timing: '45 days after planting' },
            { name: 'Urea', quantity: '45 kg/acre', timing: '90 days after planting' }
        ],
        tips: [
            'Earthing up should follow fertilizer application',
            'Use bio-fertilizers like Acetobacter for better results'
        ]
    }
};

module.exports = {
    cropsList,
    fertilizerRecommendations
};
