const rateLimit = require('express-rate-limit');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

// Routers
const { usersRouter } = require('./routes/users.routes');

// Global error controller
const { globalErrorHandler } = require('./controllers/errors.controller');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

// Enable CORS
app.use(cors());

// Express rate limit
const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000, //1 hr
  message: 'to0 many requests from this IP',
});

app.use(limiter);

// Helmet
app.use(helmet());

// Compression
app.use(compression());

// Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Endpoints
app.use('/api/v1/users', usersRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
