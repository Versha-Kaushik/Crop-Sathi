import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Crop Recommendation',
      description: 'Get personalized crop suggestions based on soil type and weather conditions',
      link: '/crop-advisory'
    },
    {
      icon: '🧪',
      title: 'Fertilizer Advisory',
      description: 'Discover the right fertilizers for your crops to maximize yield and quality',
      link: '/fertilizer-advisory'
    },
    {
      icon: '🌤️',
      title: 'Weather Alerts',
      description: 'Stay informed with real-time weather updates and farming recommendations',
      link: '/weather-alerts'
    },
    {
      icon: '📊',
      title: 'Market Prices',
      description: 'Access current market prices from various mandis across India',
      link: '/market-prices'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Farmers' },
    { number: '50+', label: 'Crop Varieties' },
    { number: '100+', label: 'Fertilizer Types' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Farmers with <span className="highlight">Smart Advisory</span>
            </h1>
            <p className="hero-description">
              Get personalized crop recommendations, fertilizer guidance, weather alerts, 
              and market prices - all in one platform designed for Indian farmers.
            </p>
            <div className="hero-buttons">
              <Link to="/crop-advisory" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="farming-illustration">
              <div className="farmer">👨‍🌾</div>
              <div className="crops">🌾🌽🥕</div>
              <div className="tractor">🚜</div>
              <div className="sun">☀️</div>
              <div className="clouds">☁️</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Smart Solutions</h2>
          <p className="section-description">
            Comprehensive agricultural advisory platform with cutting-edge technology
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Farming?</h2>
            <p className="cta-description">
              Join thousands of farmers who are already benefiting from our smart advisory platform
            </p>
            <Link to="/crop-advisory" className="btn btn-primary btn-large">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;