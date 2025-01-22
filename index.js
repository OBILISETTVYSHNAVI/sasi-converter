const express = require('express');
const convert = require('./convert'); 

const app = express();

app.use(express.json());


app.get('/convert', (req, res) => {
    const { inr } = req.body; 

    if (typeof inr !== 'number' || inr <= 0) {
        return res.status(400).json({ error: 'Invalid INR amount. Please provide a positive number.' });
    }

    try {
        

        const usd = convert(inr);
        res.json({ inr, usd });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
