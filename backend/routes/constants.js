const express = require('express');
const router = express.Router();

const INDIAN_STATES = [
    'All',
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
    'Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const INDIAN_CROPS = [
    'All',
    'Wheat', 'Rice', 'Maize', 'Barley', 'Bajra', 'Jowar', // Cereals
    'Bengal Gram', 'Red Gram', 'Green Gram', 'Black Gram', 'Lentil', // Pulses
    'Groundnut', 'Mustard', 'Soybean', 'Sunflower', 'Sesame', // Oilseeds
    'Sugarcane', 'Cotton', 'Jute', 'Tobacco', // Cash Crops
    'Onion', 'Potato', 'Tomato', 'Brinjal', 'Cauliflower', 'Cabbage', // Vegetables
    'Mango', 'Banana', 'Apple', 'Grapes', 'Pomegranate', 'Papaya', // Fruits
    'Turmeric', 'Chilli', 'Coriander', 'Cumin', 'Garlic', 'Ginger' // Spices
];

const EXTENDED_CROP_OPTIONS = [
    "Wheat",
    "Maize",
    "Rice (Paddy)",
    "Cotton",
    "Sugarcane",
    "Bajra (Pearl Millet)",
    "Jowar (Sorghum)",
    "Ragi (Finger Millet)",
    "Barley",
    "Soybean",
    "Groundnut",
    "Mustard",
    "Sunflower",
    "Bengal Gram (Chickpea)",
    "Red Gram (Arhar/Tur)",
    "Green Gram (Moong)",
    "Black Gram (Urad)",
    "Potato",
    "Onion",
    "Tomato",
    "Jute",
    "Tea",
    "Coffee",
    "Buckwheat"
];


router.get('/states', (req, res) => {
    res.json(INDIAN_STATES);
});

router.get('/crops', (req, res) => {
    res.json(INDIAN_CROPS);
});

router.get('/crop-options', (req, res) => {
    res.json(EXTENDED_CROP_OPTIONS);
});

module.exports = router;
