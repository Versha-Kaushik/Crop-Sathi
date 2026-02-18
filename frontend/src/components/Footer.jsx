import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="footer-icon">🌾</span>
              <span className="footer-text">Crop-Sathi</span>
            </div>
            <p className="footer-description">
              Empowering farmers with smart agricultural advisory and real-time insights
              for better crop management and sustainable farming.
            </p>
          </div>



          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📧 support@cropsathi.com</p>
              <p>📞 +91-1800-CROP-HELP</p>
              <p>📍 New Delhi, India</p>
              <p>🕒 24/7 Support Available</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">💼 LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;