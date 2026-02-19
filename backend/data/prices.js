const marketPrices = [
    { crop: 'Wheat', market: 'Mandi A', modalPrice: 2100, unit: 'Quintal' },
    { crop: 'Rice', market: 'Mandi A', modalPrice: 3500, unit: 'Quintal' },
    { crop: 'Cotton', market: 'Mandi B', modalPrice: 6000, unit: 'Quintal' }
];

const priceHistory = {
    'Wheat': [
        { date: '2023-11-01', price: 2050 },
        { date: '2023-11-02', price: 2060 },
        { date: '2023-11-03', price: 2100 }
    ]
};

module.exports = {
    marketPrices,
    priceHistory
};
