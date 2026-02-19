const weatherData = {
    current: {
        temp: 28,
        condition: 'Sunny',
        humidity: 45,
        wind: 12
    },
    forecast: [
        { day: 'Mon', temp: 29, condition: 'Sunny' },
        { day: 'Tue', temp: 27, condition: 'Cloudy' },
        { day: 'Wed', temp: 25, condition: 'Rain' }
    ]
};

const weatherAlerts = [
    {
        id: 1,
        type: 'Advisory',
        message: 'Light rain expected. Delay irrigation.'
    }
];

module.exports = {
    weatherData,
    weatherAlerts
};
