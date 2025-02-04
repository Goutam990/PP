const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes'); // Import the routes file

dotenv.config(); // Load environment variables

// Initialize the app
const app = express();

// Middleware
app.use(cors());  // Allow frontend requests
app.use(express.json());  // For parsing application/json

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Use the routes
app.use(routes); // This will handle all the routes defined in routes.js

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
