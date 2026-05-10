const express = require('express');
const { runAnalysis } = require('../controllers/analyzeController');

const router = express.Router();

// @route   POST /api/v1/analyze
router.post('/', runAnalysis);

module.exports = router;
