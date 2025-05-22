const Contact = require('../models/contact.model');

exports.create = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ contact });
  } catch (err) {
    next(err);
  }
};
