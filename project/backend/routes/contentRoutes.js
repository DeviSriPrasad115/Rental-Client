const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const authenticateToken = require('../middleware/auth');

// Content routes (protected)
router.get('/', authenticateToken, contentController.getContent);

module.exports = router;