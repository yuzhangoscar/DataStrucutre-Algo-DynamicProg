const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', dashboardController.homepage);
router.get('/dashboard/about', dashboardController.about);

module.exports = router;
