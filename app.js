const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/recipes', async (req, res) => {
    try {
        const response = await axios.get('https://dummyjson.com/recipes');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching recipes');
    }
});

app.get('/api/recipes/:id', async (req, res) => {
    const recipeId = req.params.id;
    try {
        const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching recipe');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/recipe/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'recipe.html'));
});

app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});
