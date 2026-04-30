const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find().populate('borrowedBy', 'name username').select('-__v');
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id).populate('borrowedBy', 'name username').select('-__v');
    if (!book) {
      return res.status(404).json({ error: 'Книга не найдена' });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true, select: '-__v' }
    );
    if (!book) {
      return res.status(404).json({ error: 'Книга не найдена' });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Книга не найдена' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;