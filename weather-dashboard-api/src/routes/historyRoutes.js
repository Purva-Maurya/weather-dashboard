const express = require('express');
const router = express.Router();
const { getHistory, deleteHistory, clearHistory } = require('../controllers/historyController');

// GET
router.get('/history', getHistory);

// DELETE 
router.delete('/history/:id', deleteHistory);

// DELETE 
router.delete('/history', clearHistory);

module.exports = router;
