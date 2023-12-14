const express = require('express');
const router = express.Router();
const chatControllers = require('../controllers/chatControllers');

router.get('/health', chatControllers.healthCheck);
router.get('/chat', chatControllers.handleChat);

module.exports = router;