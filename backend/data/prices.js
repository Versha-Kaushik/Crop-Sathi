const marketPrices = [
    // --- North India ---
    { id: 1, crop: 'Wheat', variety: 'HD-2967', market: 'Azadpur Mandi, Delhi', minPrice: 2050, maxPrice: 2150, modalPrice: 2100, unit: 'per quintal', trend: 'up', change: '+2.5%', quality: 'FAQ', state: 'Delhi' },
    { id: 2, crop: 'Rice', variety: 'Basmati-1121', market: 'Kaithal, Haryana', minPrice: 5200, maxPrice: 5800, modalPrice: 5500, unit: 'per quintal', trend: 'up', change: '+1.8%', quality: 'Super', state: 'Haryana' },
    { id: 3, crop: 'Apple', variety: 'Royal Delicious', market: 'Sopore, J&K', minPrice: 6000, maxPrice: 8500, modalPrice: 7200, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'A Grade', state: 'Jammu and Kashmir' },
    { id: 4, crop: 'Mustard', variety: 'Black', market: 'Jaipur, Rajasthan', minPrice: 5400, maxPrice: 5800, modalPrice: 5600, unit: 'per quintal', trend: 'down', change: '-1.5%', quality: 'FAQ', state: 'Rajasthan' },
    { id: 5, crop: 'Sugarcane', variety: 'Co-0238', market: 'Muzaffarnagar, UP', minPrice: 340, maxPrice: 370, modalPrice: 355, unit: 'per quintal', trend: 'up', change: '+0.5%', quality: 'High Sugar', state: 'Uttar Pradesh' },
    { id: 26, crop: 'Wheat', variety: 'PBW-343', market: 'Khanna, Punjab', minPrice: 2100, maxPrice: 2200, modalPrice: 2150, unit: 'per quintal', trend: 'up', change: '+1.0%', quality: 'FAQ', state: 'Punjab' },
    { id: 27, crop: 'Apple', variety: 'Kinnaur', market: 'Shimla, HP', minPrice: 7000, maxPrice: 9000, modalPrice: 8000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'A Grade', state: 'Himachal Pradesh' },
    { id: 28, crop: 'Rice', variety: 'Basmati', market: 'Dehradun, Uttarakhand', minPrice: 4500, maxPrice: 5000, modalPrice: 4800, unit: 'per quintal', trend: 'up', change: '+2.0%', quality: 'Super', state: 'Uttarakhand' },
    { id: 29, crop: 'Apricot', variety: 'Halman', market: 'Leh, Ladakh', minPrice: 15000, maxPrice: 18000, modalPrice: 16500, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'Dried', state: 'Ladakh' },
    { id: 30, crop: 'Wheat', variety: 'Local', market: 'Grain Market, Chandigarh', minPrice: 2080, maxPrice: 2120, modalPrice: 2100, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'FAQ', state: 'Chandigarh' },

    // --- West/Central India ---
    { id: 6, crop: 'Cotton', variety: 'Shankar-6', market: 'Rajkot, Gujarat', minPrice: 6800, maxPrice: 7300, modalPrice: 7100, unit: 'per quintal', trend: 'down', change: '-1.2%', quality: 'Long Staple', state: 'Gujarat' },
    { id: 7, crop: 'Onion', variety: 'Nasik Red', market: 'Lasalgaon, Maharashtra', minPrice: 1200, maxPrice: 1600, modalPrice: 1450, unit: 'per quintal', trend: 'up', change: '+5.5%', quality: 'Medium', state: 'Maharashtra' },
    { id: 8, crop: 'Soybean', variety: 'Yellow', market: 'Indore, MP', minPrice: 4200, maxPrice: 4500, modalPrice: 4350, unit: 'per quintal', trend: 'up', change: '+2.1%', quality: 'FAQ', state: 'Madhya Pradesh' },
    { id: 9, crop: 'Groundnut', variety: 'Bold', market: 'Junagadh, Gujarat', minPrice: 5800, maxPrice: 6300, modalPrice: 6100, unit: 'per quintal', trend: 'stable', change: '+0.2%', quality: 'FAQ', state: 'Gujarat' },
    { id: 31, crop: 'Rice', variety: 'Swarna', market: 'Raipur, Chhattisgarh', minPrice: 1900, maxPrice: 2000, modalPrice: 1950, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'FAQ', state: 'Chhattisgarh' },
    { id: 32, crop: 'Cashew', variety: 'W240', market: 'Silvassa, Dadra', minPrice: 8500, maxPrice: 9500, modalPrice: 9000, unit: 'per quintal', trend: 'up', change: '+1.5%', quality: 'Whole', state: 'Dadra and Nagar Haveli' },
    { id: 33, crop: 'Coconut', variety: 'Fresh', market: 'Daman Market, Daman', minPrice: 2500, maxPrice: 3000, modalPrice: 2800, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'Fresh', state: 'Daman and Diu' },

    // --- South India ---
    { id: 10, crop: 'Turmeric', variety: 'Finger', market: 'Erode, Tamil Nadu', minPrice: 7500, maxPrice: 8500, modalPrice: 8100, unit: 'per quintal', trend: 'stable', change: '-0.3%', quality: 'FAQ', state: 'Tamil Nadu' },
    { id: 11, crop: 'Chilli', variety: 'Teja', market: 'Guntur, Andhra Pradesh', minPrice: 16000, maxPrice: 19000, modalPrice: 17800, unit: 'per quintal', trend: 'up', change: '+3.5%', quality: 'Super', state: 'Andhra Pradesh' },
    { id: 12, crop: 'Black Pepper', variety: 'Malabar', market: 'Kochi, Kerala', minPrice: 48000, maxPrice: 52000, modalPrice: 50500, unit: 'per quintal', trend: 'up', change: '+1.5%', quality: 'Garbled', state: 'Kerala' },
    { id: 13, crop: 'Maize', variety: 'Hybrid', market: 'Davangere, Karnataka', minPrice: 1900, maxPrice: 2100, modalPrice: 2000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'FAQ', state: 'Karnataka' },
    { id: 14, crop: 'Coconut', variety: 'Ball', market: 'Tiptur, Karnataka', minPrice: 15000, maxPrice: 17000, modalPrice: 16200, unit: 'per quintal', trend: 'down', change: '-2.0%', quality: 'Grade 1', state: 'Karnataka' },
    { id: 34, crop: 'Cotton', variety: 'Bunny', market: 'Warangal, Telangana', minPrice: 6500, maxPrice: 7000, modalPrice: 6800, unit: 'per quintal', trend: 'down', change: '-1.0%', quality: 'Medium', state: 'Telangana' },
    { id: 35, crop: 'Coconut', variety: 'Milling', market: 'Kavaratti, Lakshadweep', minPrice: 11000, maxPrice: 13000, modalPrice: 12000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'Copra', state: 'Lakshadweep' },
    { id: 36, crop: 'Rice', variety: 'Ponni', market: 'Puducherry Market', minPrice: 2800, maxPrice: 3200, modalPrice: 3000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'Boiled', state: 'Puducherry' },
    { id: 37, crop: 'Arecanut', variety: 'Red', market: 'Port Blair, Andaman', minPrice: 25000, maxPrice: 28000, modalPrice: 26500, unit: 'per quintal', trend: 'up', change: '+2.5%', quality: 'Whole', state: 'Andaman and Nicobar Islands' },

    // --- East India ---
    { id: 15, crop: 'Jute', variety: 'TD-5', market: 'Kolkata, WB', minPrice: 4500, maxPrice: 4800, modalPrice: 4650, unit: 'per quintal', trend: 'up', change: '+1.2%', quality: 'FAQ', state: 'West Bengal' },
    { id: 16, crop: 'Potato', variety: 'Jyoti', market: 'Hooghly, WB', minPrice: 900, maxPrice: 1100, modalPrice: 1000, unit: 'per quintal', trend: 'stable', change: '+0.5%', quality: 'FAQ', state: 'West Bengal' },
    { id: 17, crop: 'Tea', variety: 'CTC', market: 'Guwahati, Assam', minPrice: 18000, maxPrice: 25000, modalPrice: 21000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'Best', state: 'Assam' },
    { id: 18, crop: 'Lentil', variety: 'Red', market: 'Patna, Bihar', minPrice: 6200, maxPrice: 6600, modalPrice: 6400, unit: 'per quintal', trend: 'up', change: '+2.0%', quality: 'Whole', state: 'Bihar' },
    { id: 38, crop: 'Rice', variety: 'IR-64', market: 'Ranchi, Jharkhand', minPrice: 1800, maxPrice: 1950, modalPrice: 1880, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'FAQ', state: 'Jharkhand' },
    { id: 39, crop: 'Rice', variety: 'Paddy', market: 'Cuttack, Odisha', minPrice: 1900, maxPrice: 2050, modalPrice: 1980, unit: 'per quintal', trend: 'up', change: '+0.5%', quality: 'Common', state: 'Odisha' },

    // --- Northeast India ---
    { id: 40, crop: 'Kiwi', variety: 'Organic', market: 'Ziro, Arunachal', minPrice: 15000, maxPrice: 20000, modalPrice: 18000, unit: 'per quintal', trend: 'up', change: '+5.0%', quality: 'Grade A', state: 'Arunachal Pradesh' },
    { id: 41, crop: 'Black Rice', variety: 'Chak-Hao', market: 'Imphal, Manipur', minPrice: 12000, maxPrice: 15000, modalPrice: 13500, unit: 'per quintal', trend: 'up', change: '+3.0%', quality: 'Gud', state: 'Manipur' },
    { id: 42, crop: 'Turmeric', variety: 'Lakadong', market: 'Shillong, Meghalaya', minPrice: 18000, maxPrice: 22000, modalPrice: 20000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'High Curcumin', state: 'Meghalaya' },
    { id: 43, crop: 'Ginger', variety: 'Bird Eye', market: 'Aizawl, Mizoram', minPrice: 5000, maxPrice: 6000, modalPrice: 5500, unit: 'per quintal', trend: 'down', change: '-1.5%', quality: 'Spicy', state: 'Mizoram' },
    { id: 44, crop: 'Naga Chilli', variety: 'King', market: 'Kohima, Nagaland', minPrice: 35000, maxPrice: 40000, modalPrice: 38000, unit: 'per quintal', trend: 'up', change: '+2.0%', quality: 'Hot', state: 'Nagaland' },
    { id: 45, crop: 'Large Cardamom', variety: 'Black', market: 'Gangtok, Sikkim', minPrice: 55000, maxPrice: 65000, modalPrice: 60000, unit: 'per quintal', trend: 'up', change: '+4.0%', quality: 'Organic', state: 'Sikkim' },
    { id: 46, crop: 'Pineapple', variety: 'Queen', market: 'Agartala, Tripura', minPrice: 2000, maxPrice: 2500, modalPrice: 2200, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'Sweet', state: 'Tripura' },

    // --- Others ---
    { id: 19, crop: 'Tomato', variety: 'Hybrid', market: 'Kolar, Karnataka', minPrice: 1200, maxPrice: 1800, modalPrice: 1500, unit: 'per quintal', trend: 'down', change: '-4.5%', quality: 'Grade A', state: 'Karnataka' },
    { id: 20, crop: 'Garlic', variety: 'Desi', market: 'Mandsaur, MP', minPrice: 8000, maxPrice: 12000, modalPrice: 10500, unit: 'per quintal', trend: 'up', change: '+8.0%', quality: 'Bold', state: 'Madhya Pradesh' },
    { id: 21, crop: 'Ginger', variety: 'Fresh', market: 'Wayanad, Kerala', minPrice: 3500, maxPrice: 4500, modalPrice: 4100, unit: 'per quintal', trend: 'down', change: '-1.0%', quality: 'FAQ', state: 'Kerala' },
    { id: 22, crop: 'Bajra', variety: 'Hybrid', market: 'Alwar, Rajasthan', minPrice: 1950, maxPrice: 2150, modalPrice: 2050, unit: 'per quintal', trend: 'stable', change: '0.1%', quality: 'FAQ', state: 'Rajasthan' },
    { id: 23, crop: 'Banana', variety: 'Robusta', market: 'Jalgaon, Maharashtra', minPrice: 1200, maxPrice: 1500, modalPrice: 1350, unit: 'per quintal', trend: 'up', change: '+1.5%', quality: 'A Grade', state: 'Maharashtra' },
    { id: 24, crop: 'Pomegranate', variety: 'Bhagwa', market: 'Solapur, Maharashtra', minPrice: 6000, maxPrice: 9000, modalPrice: 7500, unit: 'per quintal', trend: 'up', change: '+3.0%', quality: 'Super', state: 'Maharashtra' },
    { id: 25, crop: 'Cashew', variety: 'Raw', market: 'Panaji, Goa', minPrice: 9000, maxPrice: 11000, modalPrice: 10000, unit: 'per quintal', trend: 'stable', change: '0%', quality: 'W180', state: 'Goa' },
];

const priceHistory = {
    'Wheat': [
        { date: '2025-01-15', price: 2050 },
        { date: '2025-01-16', price: 2070 },
        { date: '2025-01-17', price: 2080 },
        { date: '2025-01-18', price: 2090 },
        { date: '2025-01-19', price: 2095 },
        { date: '2025-01-20', price: 2100 }
    ],
    'Rice': [
        { date: '2025-01-15', price: 5300 },
        { date: '2025-01-16', price: 5350 },
        { date: '2025-01-17', price: 5400 },
        { date: '2025-01-18', price: 5450 },
        { date: '2025-01-19', price: 5480 },
        { date: '2025-01-20', price: 5500 }
    ]
};

module.exports = {
    marketPrices,
    priceHistory
};
