const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

const donorRoutes = require('./routes/donorRoutes');
const authRoutes = require('./routes/authRoutes')

app.use('/api/donor', donorRoutes);
app.use('/api/auth' , authRoutes

)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});