// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const PORT = process.env.PORT || 3000;
const bcrypt = require('bcrypt');

// Inside the '/register' route
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);
const user = new User({ username, password: hashedPassword });
});


// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

// Register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login route (placeholder, actual authentication logic would be added)
app.post('/login', (req, res) => {
  // Placeholder for login logic
  res.send('Login route - Work in progress');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
