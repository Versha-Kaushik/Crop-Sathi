const express = require('express');
const router = express.Router();
const { marketPrices, priceHistory } = require('../data/prices');

const generateLivePrices = () => {
    const today = new Date().toISOString().split('T')[0];

    return marketPrices.map(price => {
        const fluctuation = (Math.random() * 0.06) - 0.03;

        const newModalPrice = Math.round(price.modalPrice * (1 + fluctuation));
        const newMinPrice = Math.round(newModalPrice * 0.95);
        const newMaxPrice = Math.round(newModalPrice * 1.05);
        let trend = 'stable';
        let changePercent = (fluctuation * 100).toFixed(1);

        if (fluctuation > 0.005) {
            trend = 'up';
            changePercent = '+' + changePercent;
        } else if (fluctuation < -0.005) {
            trend = 'down';
        } else {
            trend = 'stable';
            changePercent = '0%';
        }

        return {
            ...price,
            date: today,
            modalPrice: newModalPrice,
            minPrice: newMinPrice,
            maxPrice: newMaxPrice,
            trend: trend,
            change: `${changePercent}%`
        };
    });
};

const generateInsights = (prices) => {
    const sortedByChange = [...prices].sort((a, b) => {
        const changeA = parseFloat(a.change.replace('%', ''));
        const changeB = parseFloat(b.change.replace('%', ''));
        return changeB - changeA;
    });

    const topGainers = sortedByChange.filter(p => parseFloat(p.change) > 0).slice(0, 3);
    const topLosers = sortedByChange.filter(p => parseFloat(p.change) < 0).reverse().slice(0, 3);

    let trendingUpText = "Market is stable.";
    if (topGainers.length > 0) {
        const names = topGainers.map(p => `${p.crop} (${p.change})`).join(', ');
        trendingUpText = `${names} are seeing strong upward trends due to high demand.`;
    }

    let priceDropText = "Prices are holding steady.";
    if (topLosers.length > 0) {
        const names = topLosers.map(p => `${p.crop} (${p.change})`).join(', ');
        priceDropText = `${names} have shown a decline. Good time to buy/hold.`;
    }

    const bestPrice = [...prices].sort((a, b) => b.modalPrice - a.modalPrice)[0];
    const bestMarketText = bestPrice
        ? `${bestPrice.market} is currently offering the highest price for ${bestPrice.crop} at ₹${bestPrice.modalPrice}.`
        : "Compare markets to find the best rates.";

    return [
        {
            title: "Trending Up",
            icon: "📈",
            text: trendingUpText
        },
        {
            title: "Price Drops",
            icon: "📉",
            text: priceDropText
        },
        {
            title: "Best Opportunities",
            icon: "🎯",
            text: bestMarketText
        },
        {
            title: "Quality Premium",
            icon: "📊",
            text: "Super and FAQ quality crops are commanding premium prices (~10-15% higher). Ensure proper grading before selling."
        }
    ];
};

router.get('/current', (req, res) => {
    const livePrices = generateLivePrices();
    const insights = generateInsights(livePrices);

    res.json({
        prices: livePrices,
        insights: insights
    });
});

router.get('/history/:cropName', (req, res) => {
    const history = priceHistory[req.params.cropName];
    if (!history) {
        return res.status(404).json({ message: 'History not found for this crop' });
    }
    res.json(history);
});

module.exports = router;
