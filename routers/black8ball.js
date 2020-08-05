const express = require('express');
const { getPrediction } = require('../controllers/black8ball');

const router = express.Router();

router.route('/').get(getPrediction);

module.exports = router;