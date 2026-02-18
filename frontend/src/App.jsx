import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CropAdvisory from './pages/CropAdvisory';
import FertilizerAdvisory from './pages/FertilizerAdvisory';
import WeatherAlerts from './pages/WeatherAlerts';
import MarketPrices from './pages/MarketPrices';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/crop-advisory" element={<CropAdvisory />} />
            <Route path="/fertilizer-advisory" element={<FertilizerAdvisory />} />
            <Route path="/weather-alerts" element={<WeatherAlerts />} />
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;