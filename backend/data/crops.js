const soilTypes = [
    'Alluvial',
    'Black',
    'Red',
    'Laterite',
    'Arid',
    'Forest'
];

const weatherConditions = [
    'Sunny',
    'Rainy',
    'Cloudy',
    'Humid',
    'Windy',
    'Stormy'
];

const cropRecommendations = {
    'Alluvial': {
        'Sunny': [
            {
                id: 1,
                name: 'Wheat',
                season: 'Rabi',
                description: 'Wheat requires cool growing season and bright sunshine at the time of ripening.',
                duration: '100-120 days',
                expectedYield: '40-50 quintals/ha',
                image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Rainy': [
            {
                id: 2,
                name: 'Rice',
                season: 'Kharif',
                description: 'Rice is the staple food of more than half of the world\'s population.',
                duration: '105-150 days',
                expectedYield: '30-40 quintals/ha',
                image: 'https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    },
    'Black': {
        'Sunny': [
            {
                id: 3,
                name: 'Cotton',
                season: 'Kharif',
                description: 'Cotton grows well in drier parts of the black cotton soil of the Deccan plateau.',
                duration: '150-180 days',
                expectedYield: '20-25 quintals/ha',
                image: 'https://images.pexels.com/photos/60212/pexels-photo-60212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    }
};

module.exports = {
    soilTypes,
    weatherConditions,
    cropRecommendations
};
