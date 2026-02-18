import { useState, useEffect } from 'react';
import './MarketPrices.css';

const MarketPrices = () => {
  const [marketPrices, setMarketPrices] = useState([]);
  const [marketInsights, setMarketInsights] = useState([]);
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCrop, setSelectedCrop] = useState('All');
  const [sortBy, setSortBy] = useState('price-high');
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetch('/api/prices/current')
      .then(res => res.json())
      .then(data => {
        if (data.prices && data.insights) {
          setMarketPrices(data.prices);
          setMarketInsights(data.insights);
        } else {
          setMarketPrices(Array.isArray(data) ? data : []);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching prices:', err);
        setLoading(false);
      });
  }, []);

  const filteredPrices = marketPrices
    .filter(price => selectedState === 'All' || price.state === selectedState)
    .filter(price => selectedCrop === 'All' || price.crop === selectedCrop)
    .sort((a, b) => {
      switch (sortBy) {
        case 'crop':
          return a.crop.localeCompare(b.crop);
        case 'price-high':
          return b.modalPrice - a.modalPrice;
        case 'price-low':
          return a.modalPrice - b.modalPrice;
        case 'market':
          return a.market.localeCompare(b.market);
        default:
          return 0;
      }
    });

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return '➡️';
    }
  };

  const getTrendClass = (trend) => {
    switch (trend) {
      case 'up':
        return 'trend-up';
      case 'down':
        return 'trend-down';
      case 'stable':
        return 'trend-stable';
      default:
        return 'trend-stable';
    }
  };

  const getCropIcon = (crop) => {
    const icons = {
      'Wheat': '🌾',
      'Rice': '🌾',
      'Maize': '🌽',
      'Cotton': '🤍',
      'Sugarcane': '🎋',
      'Soybean': '🫘',
      'Groundnut': '🥜',
      'Onion': '🧅',
      'Potato': '🥔',
      'Tomato': '🍅',
      'Turmeric': '🟡',
      'Chilli': '🌶️'
    };
    return icons[crop] || '🌱';
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  return (
    <div className="market-prices">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📊 Market Prices Dashboard</h1>
          <p className="page-description">
            Stay updated with real-time crop prices from major mandis across India.
            Make informed selling decisions based on current market trends and historical data.
          </p>
        </div>

        <div className="filters-section">
          <div className="filters-container">
            <div className="filter-group">
              <label htmlFor="state-filter" className="filter-label">
                📍 Filter by State
              </label>
              <select
                id="state-filter"
                className="filter-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {INDIAN_STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="crop-filter" className="filter-label">
                🌾 Filter by Crop
              </label>
              <select
                id="crop-filter"
                className="filter-select"
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
              >
                {INDIAN_CROPS.map(crop => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-filter" className="filter-label">
                📊 Sort by
              </label>
              <select
                id="sort-filter"
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-high">Price (High to Low)</option>
                <option value="price-low">Price (Low to High)</option>
              </select>
            </div>
          </div>

          <div className="results-count">
            Showing {filteredPrices.length} results
          </div>
        </div>

        <div className="prices-section">
          {filteredPrices.length > 0 ? (
            <div className="prices-grid">
              {filteredPrices.map((price) => (
                <div key={price.id} className="price-card">
                  <div className="price-header">
                    <div className="crop-info">
                      <div className="crop-icon">{getCropIcon(price.crop)}</div>
                      <div className="crop-details">
                        <h3 className="crop-name">{price.crop}</h3>
                        <p className="crop-variety">{price.variety}</p>
                      </div>
                    </div>
                    <div className={`trend - indicator ${getTrendClass(price.trend)} `}>
                      <span className="trend-icon">{getTrendIcon(price.trend)}</span>
                      <span className="trend-change">{price.change}</span>
                    </div>
                  </div>

                  <div className="price-main">
                    <div className="modal-price">
                      <span className="price-label">Modal Price</span>
                      <span className="price-value">₹{formatPrice(price.modalPrice)}</span>
                      <span className="price-unit">{price.unit}</span>
                    </div>
                  </div>

                  <div className="price-range">
                    <div className="price-range-item">
                      <span className="range-label">Min:</span>
                      <span className="range-value">₹{formatPrice(price.minPrice)}</span>
                    </div>
                    <div className="price-range-item">
                      <span className="range-label">Max:</span>
                      <span className="range-value">₹{formatPrice(price.maxPrice)}</span>
                    </div>
                  </div>

                  <div className="price-details">
                    <div className="detail-row">
                      <span className="detail-icon">🏪</span>
                      <span className="detail-text">{price.market}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">📅</span>
                      <span className="detail-text">Updated: {price.date}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">⭐</span>
                      <span className="detail-text">Quality: {price.quality}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">📊</div>
              <h3>No prices found</h3>
              <p>No market prices match your current filter selection. Try adjusting your filters.</p>
            </div>
          )}
        </div>

        <div className="insights-section">
          <h2 className="section-title">💡 Real-Time Market Insights</h2>
          <div className="insights-grid">
            {marketInsights.length > 0 ? (
              marketInsights.map((insight, index) => (
                <div key={index} className="insight-card">
                  <div className="insight-icon">{insight.icon}</div>
                  <h3>{insight.title}</h3>
                  <p>{insight.text}</p>
                </div>
              ))
            ) : (
              <div className="insight-card">
                <p>Analyzing market data...</p>
              </div>
            )}
          </div>
        </div>

        <div className="tips-section">
          <div className="tips-card">
            <h3>💰 Smart Selling Tips</h3>
            <div className="tips-list">
              <div className="tip-item">
                <span className="tip-icon">🕒</span>
                <div>
                  <strong>Timing Matters:</strong>
                  <p>Monitor price trends and sell when prices are favorable. Avoid panic selling during temporary dips.</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">📍</span>
                <div>
                  <strong>Compare Markets:</strong>
                  <p>Different mandis offer different prices. Compare multiple markets before deciding where to sell.</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">⭐</span>
                <div>
                  <strong>Focus on Quality:</strong>
                  <p>Higher quality produce commands premium prices. Invest in proper post-harvest handling.</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">📱</span>
                <div>
                  <strong>Stay Informed:</strong>
                  <p>Regular price monitoring helps you make informed decisions and maximize your profits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;