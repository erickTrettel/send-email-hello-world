const express = require('express');

const SendEmailController = require('./controllers/SendEmailController');

const router = express.Router();

router.post('/send_email', SendEmailController.sendEmail);

module.exports = router;
