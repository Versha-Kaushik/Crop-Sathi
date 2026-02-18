import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">📞 Contact Crop-Sathi</h1>
          <p className="page-description">
            Get in touch with our team for support, suggestions, or partnership opportunities.
            We're here to help you succeed in your agricultural journey.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email Support</h3>
                <p>support@cropsathi.com</p>
                <p className="contact-detail">We respond within 24 hours</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone Support</h3>
                <p>+91-1800-CROP-HELP</p>
                <p className="contact-detail">Available 24/7 for farmers</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Office Address</h3>
                <p>Agricultural Innovation Hub</p>
                <p>New Delhi, India - 110001</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h3>WhatsApp Support</h3>
                <p>+91-98765-43210</p>
                <p className="contact-detail">Quick support for urgent queries</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>❓ How accurate are the crop recommendations?</h3>
              <p>
                Our recommendations are based on extensive agricultural research and data analysis.
                While we strive for accuracy, we recommend consulting with local agricultural experts.
              </p>
            </div>
            <div className="faq-item">
              <h3>❓ Are the market prices updated in real-time?</h3>
              <p>
                Market prices are updated daily from verified mandi sources across India.
                Prices may vary throughout the day based on market conditions.
              </p>
            </div>
            <div className="faq-item">
              <h3>❓ Is Crop-Sathi free to use?</h3>
              <p>
                Yes, Crop-Sathi is completely free for all farmers. Our mission is to democratize
                access to agricultural information and support farming communities.
              </p>
            </div>
            <div className="faq-item">
              <h3>❓ How can I get personalized farming advice?</h3>
              <p>
                Contact our agricultural experts through the provided channels. We offer personalized
                consultation based on your specific location, soil type, and farming conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;