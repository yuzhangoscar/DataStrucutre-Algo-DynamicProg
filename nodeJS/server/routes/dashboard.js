const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', dashboardController.homepage);
router.post('/dashboard/save', dashboardController.addNote);

module.exports = router;
