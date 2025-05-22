const express = require('express');
const { body } = require('express-validator');

const contactController = require('../controllers/contact.controller');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('phone').notEmpty().withMessage('Phone is required'),
    body('email').isEmail().withMessage('Valid email is required'),
  ],
  validate,
  contactController.create,
);

module.exports = router;
