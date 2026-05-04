const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

app.use(errorHandler);

module.exports = app;