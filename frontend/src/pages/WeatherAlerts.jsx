import { useState, useEffect } from 'react';
import './WeatherAlerts.css';

const WeatherAlerts = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherAlerts, setWeatherAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationName, setLocationName] = useState('Your Location');

  useEffect(() => {
    const fetchWeather = (lat = null, lon = null, name = 'Your Location') => {
      setLoading(true);
      let url = '/api/weather/forecast';
      if (lat && lon) {
        url += `?lat=${lat}&lon=${lon}`;
      }

      const alertsUrl = (lat && lon)
        ? `/api/weather/alerts?lat=${lat}&lon=${lon}`
        : '/api/weather/alerts';

      Promise.all([
        fetch(url).then(res => res.json()),
        fetch(alertsUrl).then(res => res.json())
      ])
        .then(([forecast, alerts]) => {
          setWeatherData(forecast);
          setWeatherAlerts(alerts);
          setLocationName(name);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching weather data:', err);
          setLoading(false);
        });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude, 'Current Location');
        },
        (error) => {
          console.error('Error getting location:', error);
          fetchWeather(null, null, 'Your City');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      fetchWeather(null, null, 'Your City');
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    console.log('Searching for:', searchQuery);
    setLoading(true);

    fetch(`/api/weather/geocode?city=${searchQuery}`)
      .then(res => {
        if (!res.ok) throw new Error('City not found');
        return res.json();
      })
      .then(data => {
        console.log('Geocode result:', data);

        const forecastUrl = `/api/weather/forecast?lat=${data.latitude}&lon=${data.longitude}`;
        const alertsUrl = `/api/weather/alerts?lat=${data.latitude}&lon=${data.longitude}`;
        console.log('Fetching forecast from:', forecastUrl);

        Promise.all([
          fetch(forecastUrl).then(res => {
            if (!res.ok) throw new Error('Forecast fetch failed');
            return res.json();
          }),
          fetch(alertsUrl).then(res => res.json())
        ]).then(([forecast, alerts]) => {
          console.log('Forecast data received:', forecast);
          setWeatherData(forecast);
          setWeatherAlerts(alerts);
          setLocationName(`${data.name}, ${data.country}`);
          setLoading(false);
          setSearchQuery('');
        }).catch(err => {
          console.error('Error fetching forecast/alerts:', err);
          setLoading(false);
        });
      })
      .catch(err => {
        console.error('Error searching city:', err);
        alert('City not found. Please try again.');
        setLoading(false);
      });
  };
  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'advisory':
        return '💡';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  const getAlertClass = (severity) => {
    switch (severity) {
      case 'high':
        return 'alert-high';
      case 'medium':
        return 'alert-medium';
      case 'low':
        return 'alert-low';
      default:
        return 'alert-low';
    }
  };

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

  return (
    <div className="weather-alerts">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">🌤️ Weather Alerts & Forecast</h1>
          <p className="page-description">
            Stay informed with real-time weather updates for <strong>{locationName}</strong>.
          </p>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter city name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              🔍 Search
            </button>
          </form>
        </div>

        {weatherAlerts.length === 0 && (
          <div className="status-message" style={{ textAlign: 'center', margin: '20px 0', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
            {locationName === 'Your City' || locationName === 'Your Location' ? (
              <p>📍 <strong>Please search for your city</strong> or enable location release to see real-time weather and alerts.</p>
            ) : (
              <p>✅ <strong>No active warnings</strong> for {locationName}. Weather is favorable.</p>
            )}
          </div>
        )}

        {weatherAlerts.length > 0 && (
          <section className="alerts-section">
            <h2 className="section-title">🚨 Active Weather Alerts</h2>
            <div className="alerts-grid">
              {weatherAlerts.map((alert) => (
                <div key={alert.id} className={`alert-card ${getAlertClass(alert.severity)}`}>
                  <div className="alert-header">
                    <div className="alert-icon">{getAlertIcon(alert.type)}</div>
                    <div className="alert-title-section">
                      <h3 className="alert-title">{alert.title}</h3>
                      <div className="alert-meta">
                        <span className="alert-type">{alert.type.toUpperCase()}</span>
                        <span className="alert-severity">{alert.severity.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>

                  <p className="alert-description">{alert.description}</p>

                  <div className="alert-details">
                    <div className="detail-item">
                      <span className="detail-label">📍 Affected Regions:</span>
                      <span className="detail-value">{alert.regions.join(', ')}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">📅 Valid Period:</span>
                      <span className="detail-value">{alert.validFrom} to {alert.validTo}</span>
                    </div>
                  </div>

                  <div className="recommendations">
                    <h4 className="recommendations-title">🌾 Farming Recommendations:</h4>
                    <ul className="recommendations-list">
                      {alert.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {!(locationName === 'Your City' || locationName === 'Your Location') && (
          <section className="forecast-section">
            <h2 className="section-title">📅 7-Day Weather Forecast</h2>
            <div className="forecast-grid">
              {weatherData.map((weather) => (
                <div key={weather.id} className="weather-card">
                  <div className="weather-header">
                    <div className="weather-day">
                      <h3 className="day-name">{weather.day}</h3>
                      <p className="day-date">{weather.date}</p>
                    </div>
                    <div className="weather-icon">{weather.icon}</div>
                  </div>

                  <div className="weather-temp">
                    <span className="temp-max">{weather.temperature.max}°</span>
                    <span className="temp-divider">/</span>
                    <span className="temp-min">{weather.temperature.min}°</span>
                  </div>

                  <div className="weather-condition">
                    <span className="condition-text">{weather.condition}</span>
                    {weather.alert && (
                      <div className="condition-alert">
                        ⚠️ {weather.alert}
                      </div>
                    )}
                  </div>

                  <div className="weather-details">
                    <div className="detail-row">
                      <span className="detail-icon">💧</span>
                      <span className="detail-text">Humidity: {weather.humidity}%</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">💨</span>
                      <span className="detail-text">Wind: {weather.windSpeed} km/h</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">🌧️</span>
                      <span className="detail-text">Rain: {weather.precipitation}%</span>
                    </div>
                  </div>

                  <div className="farming-recommendation">
                    <h4 className="recommendation-title">🌱 Farm Advice:</h4>
                    <p className="recommendation-text">{weather.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="tips-section">
          <div className="tips-card">
            <h3>🌾 Weather-Based Farming Tips</h3>
            <div className="tips-grid">
              <div className="tip-item">
                <span className="tip-icon">☀️</span>
                <div>
                  <strong>Sunny Days:</strong>
                  <p>Perfect for harvesting, drying crops, and applying fertilizers. Ensure adequate irrigation.</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">🌧️</span>
                <div>
                  <strong>Rainy Days:</strong>
                  <p>Avoid field operations. Check drainage systems and protect stored grains from moisture.</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">🥶</span>
                <div>
                  <strong>Cold Weather:</strong>
                  <p>Protect sensitive crops from frost. Use covers or heating methods for nurseries.</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">💨</span>
                <div>
                  <strong>Windy Conditions:</strong>
                  <p>Avoid spraying pesticides. Secure lightweight structures and check crop support systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeatherAlerts;