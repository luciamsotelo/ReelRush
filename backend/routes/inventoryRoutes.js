const express = require('express');
const { Inventory } = require('../models'); // Adjust the path as necessary

const router = express.Router();

// GET route to fetch all inventory items
router.get('/inventory', async (req, res) => {
  try {
    const inventoryItems = await Inventory.findAll();
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to create a new inventory item
router.post('/inventory', async (req, res) => {
  const { fly_name, fly_description, fly_quantity, item_price, item_cost, fishing_location, fish_caught, fly_image, beach_image, fish_image } = req.body;

  try {
    const newInventoryItem = await Inventory.create({ fly_name, fly_description, fly_quantity, item_price, item_cost, fishing_location, fish_caught, fly_image, beach_image, fish_image });
    res.status(201).json(newInventoryItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
