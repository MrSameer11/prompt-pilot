const express = require('express');
const router = express.Router();
const { improvePrompt } = require('../controllers/promptController');

router.post('/improve-prompt', improvePrompt);

module.exports = router;