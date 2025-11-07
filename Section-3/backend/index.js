const express = require('express'); // Import the Express library

const app = express(); // Create an Express application

const PORT = 5000; // Define the port number

// Routing
app.get('/', (req, res) => {
    res.send("Hello from Backend");
});

app.get('/add', (req, res) => {
    res.send("Hello from Add Route");
});

app.listen(PORT, () => {
    console.log("Server is running on port - " + PORT);
});