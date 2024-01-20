const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const dashboardController = require('../controllers/dashboardController');

router.get('/', mainController.homepage);
router.get('/about', mainController.about);
router.get('/dashboard', dashboardController.homepage);

module.exports = router;
