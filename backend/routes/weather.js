const express = require('express');
const router = express.Router();
const axios = require('axios');
const { weatherData, weatherAlerts } = require('../data/weather');
const getWeatherCondition = (code) => {
    if (code === 0) return { condition: 'Clear', icon: '☀️', recommendation: 'Perfect for harvesting and post-harvest activities' };
    if (code >= 1 && code <= 3) return { condition: 'Partly Cloudy', icon: '⛅', recommendation: 'Good conditions for irrigation' };
    if (code >= 45 && code <= 48) return { condition: 'Foggy', icon: '🌫️', recommendation: 'Drive slow, visibility is low' };
    if (code >= 51 && code <= 67) return { condition: 'Rainy', icon: '🌧️', recommendation: 'Avoid spraying pesticides' };
    if (code >= 71 && code <= 77) return { condition: 'Snow', icon: '❄️', recommendation: 'Protect sensitive crops from frost' };
    if (code >= 80 && code <= 82) return { condition: 'Rain Showers', icon: '🌦️', recommendation: 'Ensure good drainage' };
    if (code >= 95 && code <= 99) return { condition: 'Thunderstorm', icon: '⛈️', recommendation: 'Stay indoors, unsafe for field work' };
    return { condition: 'Unknown', icon: '❓', recommendation: 'Check local news' };
};

const generateWeatherAlerts = (daily, locationName) => {
    const alerts = [];
    const todayIndex = 0; 
    if (daily.precipitation_sum[todayIndex] > 5) {
        alerts.push({
            id: 'rain-' + Date.now(),
            type: 'warning',
            title: 'Rainfall Warning',
            description: `Rainfall (${daily.precipitation_sum[todayIndex]}mm) expected in ${locationName}.`,
            regions: [locationName],
            validFrom: new Date().toISOString().split('T')[0],
            validTo: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            severity: daily.precipitation_sum[todayIndex] > 20 ? 'high' : 'medium',
            recommendations: [
                'Ensure proper field drainage',
                'Avoid harvesting operations',
                'Protect stored crops from moisture'
            ]
        });
    }

    if (daily.temperature_2m_max[todayIndex] > 35) {
        alerts.push({
            id: 'heat-' + Date.now(),
            type: 'warning',
            title: 'Heatwave Alert',
            description: `High temperatures reaching ${daily.temperature_2m_max[todayIndex]}°C. Heat stress possible for crops.`,
            regions: [locationName],
            validFrom: new Date().toISOString().split('T')[0],
            validTo: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            severity: 'high',
            recommendations: [
                'Increase irrigation frequency',
                'Apply mulch to retain soil moisture',
                'Avoid spraying chemicals during peak heat'
            ]
        });
    }

    if (daily.temperature_2m_min[todayIndex] < 5) {
        alerts.push({
            id: 'cold-' + Date.now(),
            type: 'advisory',
            title: 'Cold Weather Advisory',
            description: `Low temperatures dropping to ${daily.temperature_2m_min[todayIndex]}°C. Risk of frost damage.`,
            regions: [locationName],
            validFrom: new Date().toISOString().split('T')[0],
            validTo: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            severity: 'medium',
            recommendations: [
                'Cover sensitive nursery plants',
                'Irrigate lightly to release soil heat',
                'Smoke treatment in orchards if necessary'
            ]
        });
    }

    if (daily.windspeed_10m_max[todayIndex] > 30) {
        alerts.push({
            id: 'wind-' + Date.now(),
            type: 'advisory',
            title: 'Strong Winds Alert',
            description: `Strong winds up to ${daily.windspeed_10m_max[todayIndex]} km/h expected.`,
            regions: [locationName],
            validFrom: new Date().toISOString().split('T')[0],
            validTo: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            severity: 'medium',
            recommendations: [
                'Support tall crops with staking',
                'Delay spraying operations (drift risk)',
                'Check greenhouse structures'
            ]
        });
    }

    return alerts;
};

router.get('/forecast', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        console.log('No location provided, using static data');
        return res.json(weatherData);
    }

    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: lon,
                daily: 'weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max',
                timezone: 'auto'
            }
        });

        const daily = response.data.daily;
        const forecast = daily.time.map((date, index) => {
            const weatherInfo = getWeatherCondition(daily.weathercode[index]);

            const dateObj = new Date(date);
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayName = index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : days[dateObj.getDay()];

            return {
                id: index + 1,
                date: date,
                day: dayName,
                location: 'Your Location', 
                temperature: {
                    max: Math.round(daily.temperature_2m_max[index]),
                    min: Math.round(daily.temperature_2m_min[index])
                },
                condition: weatherInfo.condition,
                humidity: 60 + Math.floor(Math.random() * 20), 
                windSpeed: Math.round(daily.windspeed_10m_max[index]),
                precipitation: daily.precipitation_sum[index],
                alert: daily.precipitation_sum[index] > 20 ? 'Heavy Rain' : null,
                icon: weatherInfo.icon,
                recommendation: weatherInfo.recommendation
            };
        });

        res.json(forecast);

    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.json(weatherData);
    }
});

router.get('/geocode', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        const response = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: {
                name: city,
                count: 1,
                language: 'en',
                format: 'json'
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            const result = response.data.results[0];
            res.json({
                name: result.name,
                latitude: result.latitude,
                longitude: result.longitude,
                country: result.country
            });
        } else {
            res.status(404).json({ error: 'City not found' });
        }
    } catch (error) {
        console.error('Error geocoding city:', error.message);
        res.status(500).json({ error: 'Failed to fetch location data' });
    }
});

router.get('/alerts', async (req, res) => {
    const { lat, lon } = req.query;

    if (lat && lon) {
        try {
            const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
                params: {
                    latitude: lat,
                    longitude: lon,
                    daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max',
                    timezone: 'auto'
                }
            });

            const dynamicAlerts = generateWeatherAlerts(response.data.daily, 'Selected Region');
            res.json(dynamicAlerts);
        } catch (error) {
            console.error('Error fetching data for alerts:', error.message);
            res.json([]);
        }
    } else {
        res.json([]);
    }
});

module.exports = router;
