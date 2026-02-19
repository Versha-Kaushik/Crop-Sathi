const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  // If FRONTEND_URL is set, use it. Otherwise, use 'true' to reflect the request origin (allowing all, with credentials).
  origin: process.env.FRONTEND_URL || true,
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
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
app.use('/api/constants', require('./routes/constants'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Crop Sathi API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
