import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsMenuOpen(false);
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    ...(user ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
    { name: 'Crop Advisory', path: '/crop-advisory' },
    { name: 'Fertilizer Advisory', path: '/fertilizer-advisory' },
    { name: 'Weather Alerts', path: '/weather-alerts' },
    { name: 'Market Prices', path: '/market-prices' },
    { name: 'Contact', path: '/contact' },
    ...(!user ? [
      { name: 'Login', path: '/login' },
      { name: 'Sign Up', path: '/signup' }
    ] : [])
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <span className="brand-icon">🌾</span>
            <span className="brand-text">Crop-Sathi</span>
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {user && (
            <button
              className="nav-link logout-btn"
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
            >
              Logout
            </button>
          )}
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;