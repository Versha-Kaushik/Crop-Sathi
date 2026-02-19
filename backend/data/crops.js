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
        ],
        'Cloudy': [
            {
                id: 3,
                name: 'Maize',
                season: 'Kharif',
                description: 'Maize grows well in cloudy weather with moderate rainfall.',
                duration: '90-110 days',
                expectedYield: '40-50 quintals/ha',
                image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Humid': [
            {
                id: 4,
                name: 'Sugarcane',
                season: 'Annual',
                description: 'Sugarcane thrives in hot and humid climates.',
                duration: '10-12 months',
                expectedYield: '60-100 tonnes/ha',
                image: 'https://images.pexels.com/photos/1483884/pexels-photo-1483884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Windy': [
            {
                id: 5,
                name: 'Barley',
                season: 'Rabi',
                description: 'Barley is resilient and can withstand windy conditions better than tall crops.',
                duration: '90-100 days',
                expectedYield: '30-40 quintals/ha',
                image: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Stormy': [
            {
                id: 6,
                name: 'Mustard',
                season: 'Rabi',
                description: 'Mustard is a hardy crop that can survive occasional storms.',
                duration: '85-95 days',
                expectedYield: '15-20 quintals/ha',
                image: 'https://images.pexels.com/photos/3321516/pexels-photo-3321516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    },
    'Black': {
        'Sunny': [
            {
                id: 7,
                name: 'Cotton',
                season: 'Kharif',
                description: 'Cotton grows well in drier parts of the black cotton soil with ample sunshine.',
                duration: '150-180 days',
                expectedYield: '20-25 quintals/ha',
                image: 'https://images.pexels.com/photos/6168148/pexels-photo-6168148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Rainy': [
            {
                id: 8,
                name: 'Soybean',
                season: 'Kharif',
                description: 'Soybean requires well-drained black soil and good rainfall.',
                duration: '90-100 days',
                expectedYield: '20-25 quintals/ha',
                image: 'https://images.pexels.com/photos/3735212/pexels-photo-3735212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Cloudy': [
            {
                id: 9,
                name: 'Sorghum (Jowar)',
                season: 'Kharif',
                description: 'Sorghum is drought tolerant and grows well in black soil under cloudy skies.',
                duration: '100-110 days',
                expectedYield: '25-30 quintals/ha',
                image: 'https://images.pexels.com/photos/5946059/pexels-photo-5946059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Humid': [
            {
                id: 10,
                name: 'Sunflower',
                season: 'Zaid',
                description: 'Sunflower can tolerate humidity and thrives in black soils.',
                duration: '90-100 days',
                expectedYield: '15-20 quintals/ha',
                image: 'https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Windy': [
            {
                id: 11,
                name: 'Millets',
                season: 'Kharif',
                description: 'Millets have strong root systems suitable for windy regions with black soil.',
                duration: '80-90 days',
                expectedYield: '10-15 quintals/ha',
                image: 'https://images.pexels.com/photos/11090022/pexels-photo-11090022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Stormy': [
            {
                id: 12,
                name: 'Chickpea',
                season: 'Rabi',
                description: 'Chickpea is a sturdy pulse crop suitable for black soil.',
                duration: '100-110 days',
                expectedYield: '15-20 quintals/ha',
                image: 'https://images.pexels.com/photos/5634608/pexels-photo-5634608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    },
    'Red': {
        'Sunny': [
            {
                id: 13,
                name: 'Groundnut',
                season: 'Kharif',
                description: 'Groundnut thrives in well-drained red soil with plenty of sun.',
                duration: '100-120 days',
                expectedYield: '20-30 quintals/ha',
                image: 'https://images.pexels.com/photos/6604245/pexels-photo-6604245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Rainy': [
            {
                id: 14,
                name: 'Ragi',
                season: 'Kharif',
                description: 'Ragi is a hardy crop well-suited for rain-fed red soils.',
                duration: '100-110 days',
                expectedYield: '15-20 quintals/ha',
                image: 'https://images.pexels.com/photos/804008/pexels-photo-804008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Cloudy': [
            {
                id: 15,
                name: 'Red Gram (Tur)',
                season: 'Kharif',
                description: 'Red gram grows well in red soil conditions.',
                duration: '150-180 days',
                expectedYield: '10-12 quintals/ha',
                image: 'https://images.pexels.com/photos/45920/pexels-photo-45920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Humid': [
            {
                id: 16,
                name: 'Tobacco',
                season: 'Rabi',
                description: 'Tobacco requires specific humidity levels and red soil.',
                duration: '100-120 days',
                expectedYield: '20-25 quintals/ha',
                image: 'https://images.pexels.com/photos/2165842/pexels-photo-2165842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Windy': [
            {
                id: 17,
                name: 'Castor',
                season: 'Kharif',
                description: 'Castor plants are robust and can withstand reasonable wind.',
                duration: '140-160 days',
                expectedYield: '10-15 quintals/ha',
                image: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Stormy': [
            {
                id: 18,
                name: 'Mango',
                season: 'Perennial',
                description: 'Mango trees can survive in red soil regions, though storms can affect flowering.',
                duration: 'Perennial',
                expectedYield: '8-10 tonnes/ha',
                image: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    },
    'Laterite': {
        'Sunny': [
            {
                id: 19,
                name: 'Cashew',
                season: 'Perennial',
                description: 'Cashew nuts grow well in laterite soils with sunny days.',
                duration: 'Perennial',
                expectedYield: '1-2 tonnes/ha',
                image: 'https://images.pexels.com/photos/10108398/pexels-photo-10108398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Rainy': [
            {
                id: 20,
                name: 'Coffee',
                season: 'Perennial',
                description: 'Coffee plantations thrive in rainy, hilly laterite soil regions.',
                duration: 'Perennial',
                expectedYield: '1-1.5 tonnes/ha',
                image: 'https://images.pexels.com/photos/2182061/pexels-photo-2182061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Cloudy': [
            {
                id: 21,
                name: 'Tea',
                season: 'Perennial',
                description: 'Tea requires acidic laterite soil and often cloudy, moist weather.',
                duration: 'Perennial',
                expectedYield: '2-3 tonnes/ha',
                image: 'https://images.pexels.com/photos/1483018/pexels-photo-1483018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Humid': [
            {
                id: 22,
                name: 'Rubber',
                season: 'Perennial',
                description: 'Rubber trees need high humidity and laterite soil.',
                duration: 'Perennial',
                expectedYield: '1.5-2 tonnes/ha',
                image: 'https://images.pexels.com/photos/3850588/pexels-photo-3850588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Windy': [
            {
                id: 23,
                name: 'Coconut',
                season: 'Perennial',
                description: 'Coconut palms are wind-resistant and grow well in coastal laterite soils.',
                duration: 'Perennial',
                expectedYield: '10000-14000 nuts/ha',
                image: 'https://images.pexels.com/photos/2405908/pexels-photo-2405908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Stormy': [
            {
                id: 24,
                name: 'Arecanut',
                season: 'Perennial',
                description: 'Arecanut palms can be grown in sheltered laterite areas.',
                duration: 'Perennial',
                expectedYield: '2-3 tonnes/ha',
                image: 'https://images.pexels.com/photos/10398284/pexels-photo-10398284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    },
    'Arid': {
        'Sunny': [
            {
                id: 25,
                name: 'Bajra (Pearl Millet)',
                season: 'Kharif',
                description: 'Bajra is highly drought-tolerant and loves the arid sun.',
                duration: '70-90 days',
                expectedYield: '12-15 quintals/ha',
                image: 'https://images.pexels.com/photos/5967852/pexels-photo-5967852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Rainy': [
            {
                id: 26,
                name: 'Guar',
                season: 'Kharif',
                description: 'Guar is a legume that grows well in arid zones with some rain.',
                duration: '90-110 days',
                expectedYield: '10-12 quintals/ha',
                image: 'https://images.pexels.com/photos/5408753/pexels-photo-5408753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Cloudy': [
            {
                id: 27,
                name: 'Moth Bean',
                season: 'Kharif',
                description: 'Moth bean is extremely drought-resistant.',
                duration: '60-80 days',
                expectedYield: '5-8 quintals/ha',
                image: 'https://images.pexels.com/photos/6604245/pexels-photo-6604245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Humid': [
            {
                id: 28,
                name: 'Aloe Vera',
                season: 'Perennial',
                description: 'Aloe vera is a succulent that can store water and handle arid heat.',
                duration: 'Manual Harvest',
                expectedYield: '15-20 tonnes/ha',
                image: 'https://images.pexels.com/photos/1301905/pexels-photo-1301905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Windy': [
            {
                id: 29,
                name: 'Jojoba',
                season: 'Perennial',
                description: 'Jojoba is a shrub native to dry regions and resists wind and drought.',
                duration: 'Perennial',
                expectedYield: '1-2 tonnes/ha',
                image: 'https://images.pexels.com/photos/8963479/pexels-photo-8963479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Stormy': [
            {
                id: 30,
                name: 'Pomegranate',
                season: 'Perennial',
                description: 'Pomegranate bushes are tough and provide fruit in arid conditions.',
                duration: 'Perennial',
                expectedYield: '8-10 tonnes/ha',
                image: 'https://images.pexels.com/photos/5985860/pexels-photo-5985860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    },
    'Forest': {
        'Sunny': [
            {
                id: 31,
                name: 'Black Pepper',
                season: 'Perennial',
                description: 'Black pepper vines grow well in forest filter light conditions.',
                duration: 'Perennial',
                expectedYield: '1-1.5 tonnes/ha',
                image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Rainy': [
            {
                id: 32,
                name: 'Bamboo',
                season: 'Perennial',
                description: 'Bamboo thrives in forest soils with plenty of rain.',
                duration: 'Perennial',
                expectedYield: '20-30 tonnes/ha',
                image: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Cloudy': [
            {
                id: 33,
                name: 'Medicinal Herbs',
                season: 'Various',
                description: 'Many medicinal herbs prefer the understory of forest environments.',
                duration: 'Various',
                expectedYield: 'Varies',
                image: 'https://images.pexels.com/photos/4058750/pexels-photo-4058750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Humid': [
            {
                id: 34,
                name: 'Cardamom',
                season: 'Perennial',
                description: 'Cardamom requires the cool, humid shade of forest trees.',
                duration: 'Perennial',
                expectedYield: '200-300 kg/ha',
                image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Windy': [
            {
                id: 35,
                name: 'Teak',
                season: 'Perennial',
                description: 'Teak is a valuable timber tree that stabilizes forest soil.',
                duration: 'Perennial',
                expectedYield: 'Timber',
                image: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
        'Stormy': [
            {
                id: 36,
                name: 'Ginger',
                season: 'Annual',
                description: 'Ginger grows underground and survives forest storms well.',
                duration: '8-9 months',
                expectedYield: '15-20 tonnes/ha',
                image: 'https://images.pexels.com/photos/4058750/pexels-photo-4058750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    }
};

module.exports = {
    soilTypes,
    weatherConditions,
    cropRecommendations
};
