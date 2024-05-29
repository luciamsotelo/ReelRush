const express = require('express');
const { Feedback } = require('../models'); // Adjust the path as necessary

const router = express.Router();

// GET route to fetch all feedback
router.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to create a new feedback entry
router.post('/feedback', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newFeedback = await Feedback.create({ name, email, subject, message });
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
