import { useState, useEffect } from 'react';
import './FertilizerAdvisory.css';

const FertilizerAdvisory = () => {
  const [cropsList, setCropsList] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [fertilizers, setFertilizers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    fetch(`${apiUrl}/api/fertilizers/crops-list`)
      .then(res => res.json())
      .then(data => setCropsList(data))
      .catch(err => console.error('Error fetching crops list:', err));
  }, []);

  const handleGetFertilizers = () => {
    if (selectedCrop) {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || '';
      fetch(`${apiUrl}/api/fertilizers/recommendations/${selectedCrop}`)
        .then(res => res.json())
        .then(data => {
          setFertilizers(data);
          setShowResults(true);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching fertilizer recommendations:', err);
          setLoading(false);
        });
    }
  };

  const handleReset = () => {
    setSelectedCrop('');
    setFertilizers([]);
    setShowResults(false);
  };

  const getFertilizerIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'balanced fertilizer':
      case 'complex fertilizer':
        return '⚖️';
      case 'nitrogen fertilizer':
        return '🧪';
      case 'phosphorus fertilizer':
        return '🔬';
      case 'potassium fertilizer':
        return '💊';
      case 'micronutrient':
        return '🌿';
      case 'bio-fertilizer':
        return '🦠';
      case 'organic fertilizer':
        return '🌱';
      case 'calcium fertilizer':
        return '🦴';
      case 'water soluble fertilizer':
        return '💧';
      case 'starter fertilizer':
        return '🌱';
      default:
        return '🧪';
    }
  };

  return (
    <div className="fertilizer-advisory">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🧪 Fertilizer Recommendation System</h1>
          <p className="page-description">
            Get expert fertilizer recommendations for your crops. Our comprehensive advisory system
            provides detailed guidance on fertilizer types, quantities, timing, and application methods
            to maximize your crop yield and soil health.
          </p>
        </div>

        <div className="advisory-form">
          <div className="form-section">
            <h2 className="section-title">Select Your Crop</h2>

            <div className="form-group-center">
              <label htmlFor="crop-selection" className="form-label">
                🌾 Choose Your Crop
              </label>
              <select
                id="crop-selection"
                className="form-select"
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
              >
                <option value="">Select a crop...</option>
                {cropsList.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
              <p className="form-help">Choose the crop you want fertilizer recommendations for</p>
            </div>

            <div className="form-actions">
              <button
                onClick={handleGetFertilizers}
                disabled={!selectedCrop}
                className="btn btn-primary"
              >
                Get Fertilizer Recommendations
              </button>
              <button onClick={handleReset} className="btn btn-secondary">
                Reset Selection
              </button>
            </div>
          </div>
        </div>

        {showResults && (
          <div className="results-section">
            <h2 className="section-title">Fertilizer Recommendations for {selectedCrop}</h2>

            {fertilizers.length > 0 ? (
              <div className="fertilizers-grid">
                {fertilizers.map((fertilizer) => (
                  <div key={fertilizer.id} className="fertilizer-card">
                    <div className="fertilizer-header">
                      <div className="fertilizer-icon">
                        {getFertilizerIcon(fertilizer.type)}
                      </div>
                      <div className="fertilizer-title">
                        <h3 className="fertilizer-name">{fertilizer.name}</h3>
                        <span className="fertilizer-type">{fertilizer.type}</span>
                      </div>
                    </div>

                    <div className="fertilizer-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <span className="detail-icon">📋</span>
                          <div>
                            <span className="detail-label">Application Method:</span>
                            <span className="detail-value">{fertilizer.application}</span>
                          </div>
                        </div>
                      </div>

                      <div className="detail-row">
                        <div className="detail-item">
                          <span className="detail-icon">⚖️</span>
                          <div>
                            <span className="detail-label">Quantity:</span>
                            <span className="detail-value">{fertilizer.quantity}</span>
                          </div>
                        </div>
                      </div>

                      <div className="detail-row">
                        <div className="detail-item">
                          <span className="detail-icon">📅</span>
                          <div>
                            <span className="detail-label">Timing:</span>
                            <span className="detail-value">{fertilizer.timing}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="fertilizer-benefits">
                      <h4 className="benefits-title">💪 Key Benefits:</h4>
                      <p className="benefits-text">{fertilizer.benefits}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🧪</div>
                <h3>No fertilizer recommendations found</h3>
                <p>
                  We don't have specific fertilizer recommendations for this crop yet.
                  Please try selecting a different crop or contact our agricultural experts for personalized advice.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="info-section">
          <div className="info-card">
            <h3>🌱 Important Notes</h3>
            <ul>
              <li>Always test your soil before applying fertilizers</li>
              <li>Follow recommended dosages to avoid over-fertilization</li>
              <li>Consider weather conditions before application</li>
              <li>Maintain proper storage conditions for fertilizers</li>
              <li>Apply fertilizers at the right growth stage of crops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerAdvisory;