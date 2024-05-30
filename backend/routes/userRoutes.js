const express = require('express');
const bcrypt = require('bcrypt'); // Ensure bcrypt is imported for password comparison
const { User } = require('../models'); // Import your User model

const router = express.Router();

// Route for user registration
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists with the provided email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user (password is hashed by the model hook)
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user with the provided email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Password is correct, user is authenticated
    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
