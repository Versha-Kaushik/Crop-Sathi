const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cropsRoute = require('./routes/crops');
const dashboardRoute = require('./routes/dashboard');
const fertilizerRoute = require('./routes/fertilizers');
const weatherRoute = require('./routes/weather');
const pricesRoute = require('./routes/prices');
const authRoute = require('./routes/auth');

app.use('/api/crops', cropsRoute);
app.use('/api/dashboard', dashboardRoute);
app.use('/api/fertilizers', fertilizerRoute);
app.use('/api/weather', weatherRoute);
app.use('/api/prices', pricesRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Crop Sathi API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
