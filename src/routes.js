const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SendEmailController = require('./controllers/SendEmailController');

const router = express.Router();

router.get('/', function(req, res) { res.send("Server listening") })
router.post('/send_email', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email()
  })
}), SendEmailController.sendEmail);

module.exports = router;
