const cropsList = [
    'Wheat', 'Rice', 'Maize', 'Cotton', 'Sugarcane', 'Soybean',
    'Groundnut', 'Sunflower', 'Potato', 'Tomato', 'Onion', 'Banana'
];

const fertilizerRecommendations = {
    'Wheat': [
        {
            id: 1,
            name: 'NPK 12-32-16',
            type: 'Balanced Fertilizer',
            application: 'Basal Application',
            quantity: '125 kg/hectare',
            timing: 'At sowing time',
            benefits: 'Provides balanced nutrition for root development and tillering'
        },
        {
            id: 2,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Top Dressing',
            quantity: '87 kg/hectare (split doses)',
            timing: '21 days after sowing and at tillering stage',
            benefits: 'Promotes vegetative growth and grain filling'
        },
        {
            id: 3,
            name: 'Zinc Sulphate',
            type: 'Micronutrient',
            application: 'Soil Application',
            quantity: '25 kg/hectare',
            timing: 'Before sowing',
            benefits: 'Prevents zinc deficiency and improves grain quality'
        }
    ],
    'Rice': [
        {
            id: 4,
            name: 'NPK 20-20-0',
            type: 'Balanced Fertilizer',
            application: 'Basal Application',
            quantity: '100 kg/hectare',
            timing: 'At transplanting',
            benefits: 'Essential for root establishment and early growth'
        },
        {
            id: 5,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Split Application',
            quantity: '109 kg/hectare (3 splits)',
            timing: '25, 45, and 65 days after transplanting',
            benefits: 'Supports tillering and panicle development'
        },
        {
            id: 6,
            name: 'Phosphorus (SSP)',
            type: 'Phosphorus Fertilizer',
            application: 'Basal Application',
            quantity: '375 kg/hectare',
            timing: 'Before transplanting',
            benefits: 'Enhances root growth and grain formation'
        }
    ],
    'Maize': [
        {
            id: 7,
            name: 'NPK 10-26-26',
            type: 'Starter Fertilizer',
            application: 'Basal Application',
            quantity: '100 kg/hectare',
            timing: 'At sowing',
            benefits: 'Provides early nutrition for germination and establishment'
        },
        {
            id: 8,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Side Dressing',
            quantity: '130 kg/hectare (2 splits)',
            timing: '30 and 60 days after sowing',
            benefits: 'Promotes rapid growth and cob development'
        }
    ],
    'Cotton': [
        {
            id: 9,
            name: 'NPK 17-17-17',
            type: 'Complex Fertilizer',
            application: 'Basal Application',
            quantity: '125 kg/hectare',
            timing: 'At sowing',
            benefits: 'Balanced nutrition for healthy plant growth'
        },
        {
            id: 10,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Split Application',
            quantity: '87 kg/hectare (3 splits)',
            timing: '30, 60, and 90 days after sowing',
            benefits: 'Supports vegetative growth and boll development'
        }
    ],
    'Sugarcane': [
        {
            id: 11,
            name: 'NPK 12-32-16',
            type: 'Balanced Fertilizer',
            application: 'Ring Application',
            quantity: '250 kg/hectare',
            timing: 'At planting and 45 days after',
            benefits: 'Promotes strong root system and cane formation'
        },
        {
            id: 12,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Side Dressing',
            quantity: '174 kg/hectare (2 splits)',
            timing: '60 and 120 days after planting',
            benefits: 'Enhances sugar content and cane yield'
        }
    ],
    'Soybean': [
        {
            id: 13,
            name: 'NPK 12-32-16',
            type: 'Starter Fertilizer',
            application: 'Basal Application',
            quantity: '100 kg/hectare',
            timing: 'At sowing',
            benefits: 'Provides initial nutrition before nodulation'
        },
        {
            id: 14,
            name: 'Rhizobium Culture',
            type: 'Bio-fertilizer',
            application: 'Seed Treatment',
            quantity: '200g/hectare seed',
            timing: 'Before sowing',
            benefits: 'Fixes atmospheric nitrogen naturally'
        }
    ],
    'Groundnut': [
        {
            id: 15,
            name: 'NPK 20-20-0',
            type: 'Balanced Fertilizer',
            application: 'Basal Application',
            quantity: '125 kg/hectare',
            timing: 'At sowing',
            benefits: 'Essential for pod development and oil formation'
        },
        {
            id: 16,
            name: 'Gypsum',
            type: 'Calcium Fertilizer',
            application: 'Soil Application',
            quantity: '500 kg/hectare',
            timing: '45 days after sowing',
            benefits: 'Improves pod filling and oil content'
        }
    ],
    'Sunflower': [
        {
            id: 17,
            name: 'NPK 23-23-0',
            type: 'Balanced Fertilizer',
            application: 'Basal Application',
            quantity: '87 kg/hectare',
            timing: 'At sowing',
            benefits: 'Promotes healthy plant growth and head formation'
        },
        {
            id: 18,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Top Dressing',
            quantity: '43 kg/hectare',
            timing: '30 days after sowing',
            benefits: 'Enhances seed yield and oil content'
        }
    ],
    'Potato': [
        {
            id: 19,
            name: 'NPK 19-19-19',
            type: 'Complex Fertilizer',
            application: 'Basal Application',
            quantity: '150 kg/hectare',
            timing: 'At planting',
            benefits: 'Complete nutrition for tuber development'
        },
        {
            id: 20,
            name: 'Muriate of Potash',
            type: 'Potassium Fertilizer',
            application: 'Side Dressing',
            quantity: '100 kg/hectare',
            timing: '45 days after planting',
            benefits: 'Improves tuber quality and storage life'
        }
    ],
    'Tomato': [
        {
            id: 21,
            name: 'NPK 19-19-19',
            type: 'Water Soluble Fertilizer',
            application: 'Fertigation',
            quantity: '100 kg/hectare (split doses)',
            timing: 'Weekly applications after transplanting',
            benefits: 'Balanced nutrition throughout growing period'
        },
        {
            id: 22,
            name: 'Calcium Nitrate',
            type: 'Calcium Fertilizer',
            application: 'Foliar Spray',
            quantity: '5 kg/hectare',
            timing: 'During fruit development',
            benefits: 'Prevents blossom end rot and improves fruit quality'
        }
    ],
    'Onion': [
        {
            id: 23,
            name: 'NPK 12-32-16',
            type: 'Balanced Fertilizer',
            application: 'Basal Application',
            quantity: '125 kg/hectare',
            timing: 'Before transplanting',
            benefits: 'Strong root development and bulb formation'
        },
        {
            id: 24,
            name: 'Urea',
            type: 'Nitrogen Fertilizer',
            application: 'Side Dressing',
            quantity: '87 kg/hectare (2 splits)',
            timing: '30 and 60 days after transplanting',
            benefits: 'Promotes leaf growth and bulb size'
        }
    ],
    'Banana': [
        {
            id: 25,
            name: 'NPK 8-24-24',
            type: 'Complex Fertilizer',
            application: 'Ring Application',
            quantity: '200g/plant (monthly)',
            timing: 'Every month after planting',
            benefits: 'Continuous nutrition for growth and fruiting'
        },
        {
            id: 26,
            name: 'Organic Compost',
            type: 'Organic Fertilizer',
            application: 'Basin Application',
            quantity: '10kg/plant (biannually)',
            timing: 'Every 6 months',
            benefits: 'Improves soil health and water retention'
        }
    ]
};

module.exports = {
    cropsList,
    fertilizerRecommendations
};
