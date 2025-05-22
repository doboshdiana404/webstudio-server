const express = require('express');
const { body } = require('express-validator');
const Subscription = require('../models/subscription.model');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post(
  '/',
  [body('email').isEmail().withMessage('Введіть коректну електронну адресу')],
  validate,
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const existing = await Subscription.findOne({ email });
      if (existing) {
        return res.status(400).json({ message: 'Цей email вже підписаний' });
      }

      await Subscription.create({ email });
      res.status(201).json({ message: 'Підписка успішна' });
    } catch (err) {
      next(err);
    }
  },
);

module.exports = router;
