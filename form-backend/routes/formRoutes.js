const express = require('express');
const router = express.Router();
const Form = require('../models/formModel'); // ✅ Model import

// POST route to save form
router.post('/', async (req, res) => {
  try {
    const form = new Form(req.body);
    const savedForm = await form.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
