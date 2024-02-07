const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', dashboardController.homepage);
router.get('/dashboard/item/:id', dashboardController.viewNote);
router.post('/dashboard/save', dashboardController.addNote);

module.exports = router;
