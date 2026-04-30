const errorHandler = (err, req, res, next) => {
  console.error('Ошибка:', err.message);

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ error: 'Ошибка валидации', messages });
  }

  if (err.code === 11000) {
    return res.status(400).json({ error: 'Дублирующееся значение', field: Object.keys(err.keyPattern)[0] });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Неверный формат ID' });
  }

  // Серверная ошибка
  res.status(500).json({ error: 'Внутренняя ошибка сервера', message: err.message });
};

module.exports = errorHandler;