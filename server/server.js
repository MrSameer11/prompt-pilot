const express = require('express');
const cors = require('cors');
require('dotenv').config();

const promptRoutes = require('./routes/promptRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', promptRoutes);

app.get('/', (req, res) => {
    res.send('PromptPilot API is running perfectly! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});