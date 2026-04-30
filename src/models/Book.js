const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Заголовок обязателен'],
    minlength: [2, 'Заголовок должен быть не менее 2 символов'],
    maxlength: [20, 'Заголовок не должен превышать 20 символов'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Автор обязателен'],
    minlength: [2, 'Автор должен быть не менее 2 символов'],
    maxlength: [20, 'Автор не должен превышать 20 символов'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Год выпуска обязателен'],
    min: [1000, 'Год не может быть раньше 1000'],
    max: [new Date().getFullYear() + 10, 'Год не может быть из будущего']
  },
  borrowedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);