const express = require('express'); // Import the Express library

const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');

const app = express(); // Create an Express application

const PORT = 5000; // Define the port number

// Middleware - 
app.use(express.json()); // Parse JSON request bodies
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

// Routing
// app.get('/', (req, res) => {
//     res.send("Hello from Backend");
// });

// app.get('/add', (req, res) => {
//     res.send("Hello from Add Route");
// });

// /getall route
// /delete route
// /update route

app.listen(PORT, () => {
    console.log("Server is running on port - " + PORT);
});