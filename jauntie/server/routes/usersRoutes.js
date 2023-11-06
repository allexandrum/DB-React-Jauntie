const express = require('express');
const router = express.Router();
const usersService = require('../services/usersService');

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (err) {
    console.error('Error while getting users', err.message);
    next(err);
  }
});

// GET a user by ID
router.get('/:id', async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await usersService.getUserById(userId);
    res.json(user);
  } catch (err) {
    console.error('Error while getting user', err.message);
    next(err);
  }
});

// POST a new user
router.post('/', async (req, res, next) => {
  const newUser = req.body;
  try {
    const userId = await usersService.createUser(newUser);
    res.json({ message: 'User created successfully', userId });
  } catch (err) {
    console.error('Error while creating user', err.message);
    next(err);
  }
});

// PUT to update an existing user
router.put('/:id', async (req, res, next) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  try {
    await usersService.updateUser(userId, updatedUser);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Error while updating user', err.message);
    next(err);
  }
});

// DELETE a user by ID
router.delete('/:id', async (req, res, next) => {
  const userId = req.params.id;
  try {
    await usersService.deleteUser(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error while deleting user', err.message);
    next(err);
  }
});

module.exports = router;
