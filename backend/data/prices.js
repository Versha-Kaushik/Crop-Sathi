const marketPrices = [
    // Uttar Pradesh (Major Wheat, Sugarcane, Potato producer)
    { state: 'Uttar Pradesh', district: 'Meerut', market: 'Sardhana Mandi', crop: 'Wheat', modalPrice: 2275, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Uttar Pradesh', district: 'Meerut', market: 'Mawana Mandi', crop: 'Sugarcane', modalPrice: 350, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Uttar Pradesh', district: 'Agra', market: 'Agra Mandi', crop: 'Potato', modalPrice: 850, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Uttar Pradesh', district: 'Aligarh', market: 'Aligarh Mandi', crop: 'Bajra', modalPrice: 2100, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Uttar Pradesh', district: 'Kanpur', market: 'Kanpur Grain Market', crop: 'Mustard', modalPrice: 5400, unit: 'Quintal', date: '2024-03-20' },

    // Punjab (Wheat, Rice, Cotton)
    { state: 'Punjab', district: 'Ludhiana', market: 'Khanna Mandi', crop: 'Wheat', modalPrice: 2300, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Punjab', district: 'Patiala', market: 'Rajpura Mandi', crop: 'Rice', modalPrice: 3800, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Punjab', district: 'Bathinda', market: 'Bathinda Mandi', crop: 'Cotton', modalPrice: 6800, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Punjab', district: 'Amritsar', market: 'Amritsar Mandi', crop: 'Maize', modalPrice: 2050, unit: 'Quintal', date: '2024-03-20' },

    // Madhya Pradesh (Soybean, Wheat, Pulses)
    { state: 'Madhya Pradesh', district: 'Indore', market: 'Sanwer Mandi', crop: 'Soybean', modalPrice: 4600, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Madhya Pradesh', district: 'Ujjain', market: 'Ujjain Mandi', crop: 'Wheat', modalPrice: 2400, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Madhya Pradesh', district: 'Vidisha', market: 'Vidisha Mandi', crop: 'Bengal Gram', modalPrice: 5800, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Madhya Pradesh', district: 'Sehore', market: 'Sehore Mandi', crop: 'Garlic', modalPrice: 12000, unit: 'Quintal', date: '2024-03-20' },

    // Maharashtra (Onion, Cotton, Soybean, Sugarcane)
    { state: 'Maharashtra', district: 'Nashik', market: 'Lasalgaon Mandi', crop: 'Onion', modalPrice: 1800, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Maharashtra', district: 'Nagpur', market: 'Nagpur Mandi', crop: 'Cotton', modalPrice: 7100, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Maharashtra', district: 'Pune', market: 'Pune Market Yard', crop: 'Tomato', modalPrice: 1500, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Maharashtra', district: 'Ahmednagar', market: 'Kopargaon', crop: 'Sugarcane', modalPrice: 3200, unit: 'Tonne', date: '2024-03-20' }, // Note unit difference usually, but keeping simple for now
    { state: 'Maharashtra', district: 'Latur', market: 'Latur Mandi', crop: 'Soybean', modalPrice: 4550, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Maharashtra', district: 'Akola', market: 'Akola Mandi', crop: 'Red Gram', modalPrice: 9500, unit: 'Quintal', date: '2024-03-20' },

    // Rajasthan (Mustard, Bajra, Spices)
    { state: 'Rajasthan', district: 'Jaipur', market: 'Jaipur Mandi', crop: 'Bajra', modalPrice: 2150, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Rajasthan', district: 'Alwar', market: 'Alwar Mandi', crop: 'Mustard', modalPrice: 5200, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Rajasthan', district: 'Kota', market: 'Bhamashah Mandi', crop: 'Coriander', modalPrice: 7500, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Rajasthan', district: 'Jodhpur', market: 'Jodhpur Mandi', crop: 'Cumin', modalPrice: 28000, unit: 'Quintal', date: '2024-03-20' },

    // Karnataka (Ragi, Maize, Sunflower, Coffee - usually not mandi but simplified)
    { state: 'Karnataka', district: 'Davangere', market: 'Davangere Mandi', crop: 'Maize', modalPrice: 2200, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Karnataka', district: 'Mandya', market: 'Mandya Mandi', crop: 'Ragi', modalPrice: 3400, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Karnataka', district: 'Raichur', market: 'Raichur Mandi', crop: 'Sunflower', modalPrice: 4800, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Karnataka', district: 'Shimoga', market: 'Shimoga Mandi', crop: 'Arecanut', modalPrice: 45000, unit: 'Quintal', date: '2024-03-20' },

    // Tamil Nadu (Rice, Groundnut, Coconut)
    { state: 'Tamil Nadu', district: 'Thanjavur', market: 'Thanjavur Regulated Market', crop: 'Rice', modalPrice: 3600, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Tamil Nadu', district: 'Coimbatore', market: 'Coimbatore Market', crop: 'Coconut', modalPrice: 2500, unit: '1000 Nuts', date: '2024-03-20' },
    { state: 'Tamil Nadu', district: 'Erode', market: 'Erode Turmeric Market', crop: 'Turmeric', modalPrice: 9000, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Tamil Nadu', district: 'Villupuram', market: 'Tindivanam Market', crop: 'Groundnut', modalPrice: 6500, unit: 'Quintal', date: '2024-03-20' },

    // West Bengal (Rice, Jute, Potato)
    { state: 'West Bengal', district: 'Bardhaman', market: 'Bardhaman Mandi', crop: 'Rice', modalPrice: 3400, unit: 'Quintal', date: '2024-03-20' },
    { state: 'West Bengal', district: 'Hooghly', market: 'Sheoraphuli Mandi', crop: 'Jute', modalPrice: 5100, unit: 'Quintal', date: '2024-03-20' },
    { state: 'West Bengal', district: 'Medinipur', market: 'Medinipur Mandi', crop: 'Potato', modalPrice: 800, unit: 'Quintal', date: '2024-03-20' },

    // Gujarat (Cotton, Groundnut, Castor)
    { state: 'Gujarat', district: 'Rajkot', market: 'Rajkot APMC', crop: 'Groundnut', modalPrice: 6200, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Gujarat', district: 'Amreli', market: 'Amreli Mandi', crop: 'Cotton', modalPrice: 7000, unit: 'Quintal', date: '2024-03-20' },
    { state: 'Gujarat', district: 'Patan', market: 'Patan Mandi', crop: 'Castor', modalPrice: 5800, unit: 'Quintal', date: '2024-03-20' }
];

const priceHistory = {
    'Wheat': [
        { date: '2024-03-15', price: 2150 },
        { date: '2024-03-16', price: 2160 },
        { date: '2024-03-17', price: 2180 },
        { date: '2024-03-18', price: 2200 },
        { date: '2024-03-19', price: 2250 }
    ],
    'Rice': [
        { date: '2024-03-15', price: 3400 },
        { date: '2024-03-16', price: 3420 },
        { date: '2024-03-17', price: 3450 },
        { date: '2024-03-18', price: 3480 },
        { date: '2024-03-19', price: 3500 }
    ],
    'Mustard': [
        { date: '2024-03-15', price: 5000 },
        { date: '2024-03-16', price: 5100 },
        { date: '2024-03-17', price: 5150 },
        { date: '2024-03-18', price: 5200 },
        { date: '2024-03-19', price: 5300 }
    ],
    'Cotton': [
        { date: '2024-03-15', price: 6800 },
        { date: '2024-03-16', price: 6850 },
        { date: '2024-03-17', price: 6900 },
        { date: '2024-03-18', price: 6950 },
        { date: '2024-03-19', price: 7000 }
    ],
    'Onion': [
        { date: '2024-03-15', price: 1500 },
        { date: '2024-03-16', price: 1600 },
        { date: '2024-03-17', price: 1650 },
        { date: '2024-03-18', price: 1750 },
        { date: '2024-03-19', price: 1800 }
    ]
};

module.exports = {
    marketPrices,
    priceHistory
};
