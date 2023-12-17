const express = require('express');
const router = express.Router();
const mainController = require('../controllers/dashboardController');

// Dashboard Router
router.get('/dashboard', mainController.dashboard);


module.exports = router;