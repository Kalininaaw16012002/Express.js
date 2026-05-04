const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Имя обязательно'],
    minlength: [2, 'Имя должно быть не менее 2 символов'],
    maxlength: [20, 'Имя не должно превышать 20 символов'],
    trim: true
  },
  surname: {
    type: String,
    required: [true, 'Фамилия обязательна'],
    minlength: [2, 'Фамилия должна быть не менее 2 символов'],
    maxlength: [20, 'Фамилия не должна превышать 20 символов'],
    trim: true
  },
  username: {
    type: String,
    required: [true, 'Username обязателен'],
    minlength: [5, 'Username должен быть не менее 5 символов'],
    maxlength: [20, 'Username не должен превышать 20 символов'],
    trim: true,
    unique: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

userSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'borrowedBy'
});

module.exports = mongoose.model('User', userSchema);