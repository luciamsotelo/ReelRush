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

module.exports = router;
