const soilTypes = [
    "Alluvial",
    "Black",
    "Red",
    "Laterite",
    "Desert",
    "Mountain"
];

const weatherConditions = [
    "Tropical",
    "Subtropical",
    "Temperate",
    "Dry",
    "Wet"
];

const cropRecommendations = {
    "Alluvial": {
        "Tropical": [
            {
                id: 1,
                name: "Rice",
                image: "https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Rice is the most important staple food crop. Ideally grown in clayey loam soil.",
                duration: "120-150 days",
                expectedYield: "3000-5000 kg/ha"
            },
            {
                id: 2,
                name: "Sugarcane",
                image: "https://images.pexels.com/photos/33740520/pexels-photo-33740520.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Whole Year",
                description: "Sugarcane is a long duration crop and requires heavy water.",
                duration: "10-12 months",
                expectedYield: "80-100 tons/ha"
            }
        ],
        "Subtropical": [
            {
                id: 3,
                name: "Wheat",
                image: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Rabi",
                description: "Wheat requires cool growing season and bright sunlight for ripening.",
                duration: "120 days",
                expectedYield: "3000-4000 kg/ha"
            }
        ],
        "Temperate": [
            {
                id: 13,
                name: "Potato",
                image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Rabi",
                description: "Potato grows best in cool climates with sandy loam soil.",
                duration: "90-110 days",
                expectedYield: "20-30 tons/ha"
            }
        ],
        "Dry": [
            {
                id: 4,
                name: "Maize",
                image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Maize is known as queen of cereals. It requires warm weather.",
                duration: "90-110 days",
                expectedYield: "2500-4000 kg/ha"
            }
        ],
        "Wet": [
            {
                id: 11,
                name: "Jute",
                image: "https://images.pexels.com/photos/6044407/pexels-photo-6044407.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Jute is a golden fiber crop that requires hot and humid climate.",
                duration: "120-140 days",
                expectedYield: "2000-2500 kg/ha"
            }
        ]
    },
    "Black": {
        "Tropical": [
            {
                id: 5,
                name: "Cotton",
                image: "https://images.pexels.com/photos/32796554/pexels-photo-32796554.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Cotton is a fiber crop. It grows best in black soil with high moisture retention.",
                duration: "150-180 days",
                expectedYield: "500-1000 kg/ha"
            }
        ],
        "Subtropical": [
            {
                id: 15,
                name: "Soybean",
                image: "https://images.pexels.com/photos/273838/pexels-photo-273838.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Soybean is a miracle crop rich in protein.",
                duration: "90-100 days",
                expectedYield: "1500-2500 kg/ha"
            }
        ],
        "Dry": [
            {
                id: 6,
                name: "Jowar",
                image: "https://images.pexels.com/photos/106162/wheat-wheat-spike-wheat-field-cornfield-106162.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Rabi",
                description: "Jowar is a hardy crop that can grow in dry conditions.",
                duration: "100-115 days",
                expectedYield: "2000-3000 kg/ha"
            }
        ],
        "Wet": [
            {
                id: 17,
                name: "Sunflower",
                image: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "All",
                description: "Sunflower can tolerate wet conditions if drainage is good.",
                duration: "90-100 days",
                expectedYield: "1500-2000 kg/ha"
            }
        ]
    },
    "Red": {
        "Tropical": [
            {
                id: 7,
                name: "Groundnut",
                image: "https://images.pexels.com/photos/135755/pexels-photo-135755.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Groundnut is an important oilseed crop suitable for red sandy loam soils.",
                duration: "100-120 days",
                expectedYield: "1500-2000 kg/ha"
            }
        ],
        "Subtropical": [
            {
                id: 18,
                name: "Maize",
                image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Maize grows well in red loamy soils.",
                duration: "90-100 days",
                expectedYield: "3-4 tons/ha"
            }
        ],
        "Dry": [
            {
                id: 8,
                name: "Ragi",
                image: "https://images.pexels.com/photos/96417/pexels-photo-96417.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Ragi is very nutritious and can withstand severe drought.",
                duration: "100-110 days",
                expectedYield: "1500-2000 kg/ha"
            }
        ],
        "Wet": [
            {
                id: 20,
                name: "Rice (Upland)",
                image: "https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Certain rice varieties grow well in red soils with irrigation.",
                duration: "100-120 days",
                expectedYield: "2000-3000 kg/ha"
            }
        ]
    },
    "Laterite": {
        "Tropical": [
            {
                id: 21,
                name: "Coffee",
                image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Coffee thrives in laterite soils of hill slopes.",
                duration: "Perennial",
                expectedYield: "800-1200 kg/ha"
            }
        ],
        "Subtropical": [
            {
                id: 22,
                name: "Tea",
                image: "https://images.pexels.com/photos/322461/pexels-photo-322461.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Tea requires well-drained acidic soil.",
                duration: "Perennial",
                expectedYield: "1500-2000 kg/ha"
            }
        ],
        "Temperate": [
            {
                id: 23,
                name: "Cardamom",
                image: "https://images.pexels.com/photos/10111481/pexels-photo-10111481.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Cardamom requires cool, humid climate and rich soil.",
                duration: "Perennial",
                expectedYield: "200-300 kg/ha"
            }
        ],
        "Wet": [
            {
                id: 9,
                name: "Cashew",
                image: "https://images.pexels.com/photos/4663476/pexels-photo-4663476.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Cashew grows well in laterite soils on the slopes of hills.",
                duration: "Perennial",
                expectedYield: "800-1000 kg/ha"
            }
        ]
    },
    "Desert": {
        "Tropical": [
            {
                id: 25,
                name: "Date Palm",
                image: "https://images.pexels.com/photos/28613482/pexels-photo-28613482.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Date Palm loves hot and dry climate.",
                duration: "Perennial",
                expectedYield: "50-80 kg/tree"
            }
        ],
        "Subtropical": [
            {
                id: 26,
                name: "Pomegranate",
                image: "https://images.pexels.com/photos/10104672/pexels-photo-10104672.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Pomegranate grows well in arid and semi-arid regions.",
                duration: "Perennial",
                expectedYield: "10-12 tons/ha"
            }
        ],
        "Dry": [
            {
                id: 10,
                name: "Bajra",
                image: "https://images.pexels.com/photos/10738421/pexels-photo-10738421.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Kharif",
                description: "Bajra grows well in sandy soils and shallow black soil.",
                duration: "85-90 days",
                expectedYield: "1200-1500 kg/ha"
            }
        ],
        "Wet": [
            {
                id: 28,
                name: "Lemon",
                image: "https://images.pexels.com/photos/952369/pexels-photo-952369.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Lemon can be grown in sandy soils with commercial irrigation.",
                duration: "Perennial",
                expectedYield: "20-30 tons/ha"
            }
        ]
    },
    "Mountain": {
        "Subtropical": [
            {
                id: 30,
                name: "Peach",
                image: "https://images.pexels.com/photos/8588203/pexels-photo-8588203.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Peaches require chilling hours and hill slopes.",
                duration: "Perennial",
                expectedYield: "20-25 kg/tree"
            }
        ],
        "Temperate": [
            {
                id: 31,
                name: "Apple",
                image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Apples are the most important temperate fruit of the hills.",
                duration: "Perennial",
                expectedYield: "10-15 tons/ha"
            }
        ],
        "Wet": [
            {
                id: 33,
                name: "Plum",
                image: "https://images.pexels.com/photos/28280666/pexels-photo-28280666.jpeg?auto=compress&cs=tinysrgb&w=600",
                season: "Perennial",
                description: "Plums require moist soils and cooler climate.",
                duration: "Perennial",
                expectedYield: "40-50 kg/tree"
            }
        ]
    }
};

module.exports = {
    soilTypes,
    weatherConditions,
    cropRecommendations
};
