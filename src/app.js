const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const contactRoutes = require('./routes/contact.routes');
const errorHandler = require('./middlewares/errorHandler');
const subscribeRoutes = require('./routes/subscribe.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use('/api/v1/contacts', contactRoutes);
app.use('/api/subscribe', subscribeRoutes);
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

app.use(errorHandler);

module.exports = app;
