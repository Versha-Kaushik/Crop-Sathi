const cropsList = [
    'All',
    'Wheat', 'Rice', 'Maize', 'Barley', 'Bajra', 'Jowar', // Cereals
    'Bengal Gram', 'Red Gram', 'Green Gram', 'Black Gram', 'Lentil', // Pulses
    'Groundnut', 'Mustard', 'Soybean', 'Sunflower', 'Sesame', // Oilseeds
    'Sugarcane', 'Cotton', 'Jute', 'Tobacco', // Cash Crops
    'Onion', 'Potato', 'Tomato', 'Brinjal', 'Cauliflower', 'Cabbage', // Vegetables
    'Mango', 'Banana', 'Apple', 'Grapes', 'Pomegranate', 'Papaya', // Fruits
    'Turmeric', 'Chilli', 'Coriander', 'Cumin', 'Garlic', 'Ginger' // Spices
];

const fertilizerRecommendations = {
    // Cereals
    'Wheat': {
        basal: [
            { name: 'DAP', quantity: '55 kg/acre', timing: 'At sowing' },
            { name: 'Urea', quantity: '25 kg/acre', timing: 'At sowing' }
        ],
        topDressing: [
            { name: 'Urea', quantity: '30 kg/acre', timing: 'First irrigation (CRI stage)' },
            { name: 'Urea', quantity: '25 kg/acre', timing: 'Second irrigation (Tillering)' }
        ],
        tips: ['Apply Zinc Sulphate if soil is deficient.', 'Avoid mixing Urea with seeds directly.']
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
        tips: ['Drain excess water before top dressing.', 'Use Neem Coated Urea for better efficiency.']
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
        tips: ['Avoid waterlogging after fertilization.', 'Split urea application increases yield.']
    },
    'Barley': {
        basal: [{ name: 'N:P:K 40:20:20', quantity: 'Full Dose', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '10 kg/acre', timing: 'Tillering stage' }],
        tips: ['Do not apply excess Nitrogen as it causes lodging.']
    },
    'Bajra': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '20 kg/acre', timing: '30 days after sowing' }],
        tips: ['Apply fertilizers in moist soil conditions.']
    },
    'Jowar': {
        basal: [{ name: 'NPK', quantity: '40:40:40 kg/ha', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '40 kg/ha', timing: '30-35 days after sowing' }],
        tips: ['Maintain plant population for effective fertilizer use.']
    },

    // Oilseeds
    'Mustard': {
        basal: [{ name: 'SSP', quantity: '100 kg/acre', timing: 'At sowing' }, { name: 'Urea', quantity: '25 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '25 kg/acre', timing: 'At flowering initiation' }],
        tips: ['Sulphur is critical for oil content in mustard.']
    },
    'Soybean': {
        basal: [{ name: 'NPK 12:32:16', quantity: '50 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'Not recommended usually', quantity: '0', timing: '-' }],
        tips: ['Inoculate seeds with Rhizobium culture.', 'Apply Sulphur for better oil yield.']
    },
    'Groundnut': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }, { name: 'Gypsum', quantity: '200 kg/acre', timing: 'At flowering' }],
        topDressing: [{ name: 'Urea', quantity: '10 kg/acre', timing: '30 days after sowing' }],
        tips: ['Gypsum application is crucial for pod development.', 'Avoid deep sowing.']
    },
    'Sunflower': {
        basal: [{ name: 'NPK', quantity: '60:40:40 kg/ha', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: 'Split dose', timing: 'Flower initiation' }],
        tips: ['Boron application helps in better seed setting.']
    },
    'Sesame': {
        basal: [{ name: 'N:P:K', quantity: '30:20:20 kg/ha', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: 'Split dose', timing: '30 DAS' }],
        tips: ['Sensitive to waterlogging.']
    },

    // Cash Crops
    'Cotton': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }, { name: 'MOP', quantity: '20 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '30 kg/acre', timing: 'Square formation (45 days)' }, { name: 'Urea', quantity: '30 kg/acre', timing: 'Flowering stage (75 days)' }],
        tips: ['Foliar spray of Magnesium Sulphate prevents reddening.', 'Do not apply urea during heavy rains.']
    },
    'Sugarcane': {
        basal: [{ name: 'DAP', quantity: '75 kg/acre', timing: 'At planting' }, { name: 'MOP', quantity: '40 kg/acre', timing: 'At planting' }],
        topDressing: [{ name: 'Urea', quantity: '45 kg/acre', timing: '45 DAP' }, { name: 'Urea', quantity: '45 kg/acre', timing: '90 DAP' }],
        tips: ['Earthing up should follow fertilizer application.', 'Bio-fertilizers recommended.']
    },
    'Jute': {
        basal: [{ name: 'N:P:K', quantity: '20:20:20 kg/ha', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '10 kg/acre', timing: '3-4 weeks crop age' }],
        tips: ['Clean cultivation is important.']
    },
    'Tobacco': {
        basal: [{ name: 'N:P:K', quantity: 'Special Mix', timing: 'At planting' }],
        topDressing: [{ name: 'Potassium Nitrate', quantity: 'Foliar', timing: 'Active growth' }],
        tips: ['Avoid Chloride fertilizers as they affect burning quality.']
    },

    // Pulses
    'Bengal Gram': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: 'Foliar Spray 2%', timing: 'Flowering' }],
        tips: ['Use Sulphur for better yield.', 'Nipping of apical bud promotes branching.']
    },
    'Red Gram': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'NA', quantity: '-', timing: '-' }],
        tips: ['Pulse magic spray at flowering is beneficial.']
    },
    'Green Gram': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }],
        topDressing: [],
        tips: ['Seed treatment is very important.']
    },
    'Black Gram': {
        basal: [{ name: 'DAP', quantity: '40 kg/acre', timing: 'At sowing' }],
        topDressing: [],
        tips: ['Similar needs to Green Gram.']
    },
    'Lentil': {
        basal: [{ name: 'DAP', quantity: '30 kg/acre', timing: 'At sowing' }],
        topDressing: [],
        tips: ['Requires less nitrogen.']
    },

    // Vegetables
    'Onion': {
        basal: [{ name: 'FYM', quantity: '10 Tonnes/acre', timing: 'Before planting' }, { name: 'NPK', quantity: '100:50:50 kg/ha', timing: 'Basal' }],
        topDressing: [{ name: 'Urea', quantity: 'Split doses', timing: '30 & 60 days' }],
        tips: ['Sulphur enhances pungency and keeping quality.']
    },
    'Potato': {
        basal: [{ name: 'NPK 12:32:16', quantity: '150 kg/acre', timing: 'At sowing' }],
        topDressing: [{ name: 'Urea', quantity: '50 kg/acre', timing: 'Earthing up time' }],
        tips: ['Potash is very important for tuber size.', 'Avoid chloride fertilizers.']
    },
    'Tomato': {
        basal: [{ name: 'FYM', quantity: '10 tons/acre', timing: 'Land prep' }, { name: 'NPK', quantity: 'Basal Dose', timing: 'Transplanting' }],
        topDressing: [{ name: 'Calcium Nitrate', quantity: 'Foliar', timing: 'Fruiting' }],
        tips: ['Prevent Blossom End Rot with Calcium sprays.']
    },
    'Brinjal': {
        basal: [{ name: 'NPK', quantity: '100:50:50', timing: 'Planting' }],
        topDressing: [{ name: 'Urea', quantity: 'Split', timing: '30, 45, 60 DAP' }],
        tips: ['High fertilizer feeder crop.']
    },
    'Cauliflower': {
        basal: [{ name: 'FYM', quantity: 'Heavy', timing: 'Prep' }],
        topDressing: [{ name: 'Nitrogen', quantity: 'Split', timing: 'Growth' }],
        tips: ['Boron and Molybdenum deficiency common.']
    },
    'Cabbage': {
        basal: [{ name: 'Same as Cauliflower', quantity: '-', timing: '-' }],
        topDressing: [{ name: 'Same', quantity: '-', timing: '-' }],
        tips: ['Watch for pest attacks.']
    },

    // Fruits
    'Mango': {
        basal: [{ name: 'FYM + NPK', quantity: 'Age dependent', timing: 'Post harvest' }],
        topDressing: [],
        tips: ['Paclobutrazol used for flowering regulation.']
    },
    'Banana': {
        basal: [{ name: 'Potash', quantity: 'High requirement', timing: 'Regular intervals' }],
        topDressing: [{ name: 'Urea + Potash', quantity: 'Monthly', timing: 'Till shooting' }],
        tips: ['Micro-nutrient sprays essential.']
    },
    'Apple': {
        basal: [{ name: 'NPK', quantity: 'Tree Age Based', timing: 'Dormancy' }],
        topDressing: [],
        tips: ['Calcium sprays for fruit firmness.']
    },
    'Grapes': {
        basal: [{ name: 'FYM', quantity: 'Heavy', timing: 'April & October pruning' }],
        topDressing: [{ name: 'Specific Schedule', quantity: '-', timing: '-' }],
        tips: ['Complex nutrient management needed.']
    },
    'Pomegranate': {
        basal: [{ name: 'FYM + NPK', quantity: 'Standard', timing: 'Bahar treatment' }],
        topDressing: [],
        tips: ['Bacterial blight management is key.']
    },
    'Papaya': {
        basal: [{ name: 'NPK', quantity: '250:250:500g/plant/year', timing: 'Split every 2 months' }],
        topDressing: [],
        tips: ['Sensitive to water stagnation.']
    },

    // Spices
    'Turmeric': {
        basal: [{ name: 'FYM', quantity: 'Heavy', timing: 'Planting' }],
        topDressing: [{ name: 'N & K', quantity: 'Split', timing: '30, 60, 90, 120 days' }],
        tips: ['High organic matter requirement.']
    },
    'Chilli': {
        basal: [{ name: 'NPK', quantity: 'Basal', timing: 'Transplanting' }],
        topDressing: [{ name: 'N', quantity: 'Split', timing: '30 & 60 days' }],
        tips: ['Calcium prevents fruit rot.']
    },
    'Coriander': {
        basal: [{ name: 'N:P:K', quantity: '20:30:20', timing: 'Sowing' }],
        topDressing: [],
        tips: ['Harvest leaves before flowering for greens.']
    },
    'Cumin': {
        basal: [{ name: 'N:P', quantity: '30:20', timing: 'Sowing' }],
        topDressing: [{ name: 'N', quantity: '30 DAS', timing: 'Top dress' }],
        tips: ['Wilt sensitive.']
    },
    'Garlic': {
        basal: [{ name: 'NPK', quantity: '50:50:50', timing: 'Planting' }],
        topDressing: [{ name: 'N', quantity: '30 & 45 Days', timing: 'Split' }],
        tips: ['Sulphur improves pungency.']
    },
    'Ginger': {
        basal: [{ name: 'FYM', quantity: 'Heavy', timing: 'Planting' }],
        topDressing: [{ name: 'N & K', quantity: 'Split', timing: '45, 90 days' }],
        tips: ['Avoid water stagnation.']
    }
};

module.exports = {
    cropsList,
    fertilizerRecommendations
};
