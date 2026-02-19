import { useState, useEffect } from 'react';
import './CropAdvisory.css';

const CropAdvisory = () => {
  const [soilTypes, setSoilTypes] = useState([]);
  const [weatherConditions, setWeatherConditions] = useState([]);
  const [selectedSoil, setSelectedSoil] = useState('');
  const [selectedWeather, setSelectedWeather] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    fetch(`${apiUrl}/api/crops/meta`)
      .then(res => res.json())
      .then(data => {
        setSoilTypes(data.soilTypes);
        setWeatherConditions(data.weatherConditions);
      })
      .catch(err => console.error('Error fetching meta data:', err));
  }, []);

  const handleGetRecommendations = () => {
    if (selectedSoil && selectedWeather) {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || '';
      fetch(`${apiUrl}/api/crops/recommendations?soil=${selectedSoil}&weather=${selectedWeather}`)
        .then(res => res.json())
        .then(data => {
          setRecommendations(data);
          setShowResults(true);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching recommendations:', err);
          setLoading(false);
        });
    }
  };

  const handleReset = () => {
    setSelectedSoil('');
    setSelectedWeather('');
    setRecommendations([]);
    setShowResults(false);
  };

  return (
    <div className="crop-advisory">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🌱 Crop Recommendation System</h1>
          <p className="page-description">
            Get personalized crop recommendations based on your soil type and weather conditions.
            Our smart advisory system helps you choose the best crops for maximum yield and profitability.
          </p>
        </div>

        <div className="advisory-form">
          <div className="form-section">
            <h2 className="section-title">Select Your Farming Conditions</h2>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="soil-type" className="form-label">
                  🌍 Soil Type
                </label>
                <select
                  id="soil-type"
                  className="form-select"
                  value={selectedSoil}
                  onChange={(e) => setSelectedSoil(e.target.value)}
                >
                  <option value="">Select soil type...</option>
                  {soilTypes.map((soil) => (
                    <option key={soil} value={soil}>
                      {soil}
                    </option>
                  ))}
                </select>
                <p className="form-help">Choose the primary soil type in your farming area</p>
              </div>

              <div className="form-group">
                <label htmlFor="weather-condition" className="form-label">
                  ⛅ Weather Condition
                </label>
                <select
                  id="weather-condition"
                  className="form-select"
                  value={selectedWeather}
                  onChange={(e) => setSelectedWeather(e.target.value)}
                >
                  <option value="">Select weather condition...</option>
                  {weatherConditions.map((weather) => (
                    <option key={weather} value={weather}>
                      {weather}
                    </option>
                  ))}
                </select>
                <p className="form-help">Select the typical weather pattern in your region</p>
              </div>
            </div>

            <div className="form-actions">
              <button
                onClick={handleGetRecommendations}
                disabled={!selectedSoil || !selectedWeather}
                className="btn btn-primary"
              >
                Get Crop Recommendations
              </button>
              <button onClick={handleReset} className="btn btn-secondary">
                Reset Selection
              </button>
            </div>
          </div>
        </div>

        {showResults && (
          <div className="results-section">
            <h2 className="section-title">Recommended Crops for You</h2>
            <div className="conditions-summary">
              <div className="condition-tag">
                <span className="tag-label">Soil:</span>
                <span className="tag-value">{selectedSoil}</span>
              </div>
              <div className="condition-tag">
                <span className="tag-label">Weather:</span>
                <span className="tag-value">{selectedWeather}</span>
              </div>
            </div>

            {recommendations.length > 0 ? (
              <div className="recommendations-grid">
                {recommendations.map((crop) => (
                  <div key={crop.id} className="crop-card">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="crop-image"
                      onError={(e) => {
                        e.target.src = 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <div className="crop-header">
                      <h3 className="crop-name">{crop.name}</h3>
                      <span className="crop-season">{crop.season}</span>
                    </div>
                    <p className="crop-description">{crop.description}</p>
                    <div className="crop-details">
                      <div className="detail-item">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">{crop.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Expected Yield:</span>
                        <span className="detail-value">{crop.expectedYield}</span>
                      </div>
                    </div>
                    <div className="crop-actions">
                      <button className="btn btn-outline">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🌾</div>
                <h3>No specific recommendations found</h3>
                <p>
                  We don't have specific crop recommendations for this combination yet.
                  Please try different soil and weather combinations or contact our experts.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CropAdvisory;