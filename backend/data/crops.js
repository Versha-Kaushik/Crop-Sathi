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
                image: 'https://images.pexels.com/photos/6165053/pexels-photo-6165053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/12801990/pexels-photo-12801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/15997691/pexels-photo-15997691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/273838/pexels-photo-273838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/106162/wheat-wheat-spike-wheat-field-cornfield-106162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/10738421/pexels-photo-10738421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/34949285/pexels-photo-34949285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/135755/pexels-photo-135755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://gonefarmers.com/cdn/shop/products/image_0dec6a31-157e-46ab-b1f5-f5df542b6cd5_2048x.heic?v=1679242934?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/2257526/pexels-photo-2257526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/4663476/pexels-photo-4663476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/1240961/pexels-photo-1240961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/12996935/pexels-photo-12996935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/4609254/pexels-photo-4609254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ],
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
                image: 'https://images.pexels.com/photos/10738421/pexels-photo-10738421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/32421443/pexels-photo-32421443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/122370/pexels-photo-122370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/12496907/pexels-photo-12496907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/10104672/pexels-photo-10104672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/5988689/pexels-photo-5988689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/9989597/pexels-photo-9989597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/8217944/pexels-photo-8217944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                image: 'https://images.pexels.com/photos/33930747/pexels-photo-33930747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ]
    }
};

module.exports = {
    soilTypes,
    weatherConditions,
    cropRecommendations
};
