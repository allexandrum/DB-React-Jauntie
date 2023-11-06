const express = require('express');
const router = express.Router();
const subsService = require('../services/subsService');

// GET all news subscriptions
router.get('/', async (req, res, next) => {
  try {
    const newsSubscriptions = await subsService.getNewsSubscriptions();
    res.json(newsSubscriptions);
  } catch (err) {
    console.error('Error while getting news subscriptions', err.message);
    next(err);
  }
});

// GET a news subscription by ID
router.get('/:id', async (req, res, next) => {
  const newsSubscriptionId = req.params.id;
  try {
    const newsSubscription = await subsService.getNewsSubscriptionById(newsSubscriptionId);
    res.json(newsSubscription);
  } catch (err) {
    console.error('Error while getting news subscription', err.message);
    next(err);
  }
});

// POST a new news subscription
router.post('/', async (req, res, next) => {
  const newNewsSubscription = req.body;
  try {
    const newsSubscriptionId = await subsService.createNewsSubscription(newNewsSubscription);
    res.json({ message: 'News subscription created successfully', newsSubscriptionId });
  } catch (err) {
    console.error('Error while creating news subscription', err.message);
    next(err);
  }
});

// PUT to update an existing news subscription
router.put('/:id', async (req, res, next) => {
  const newsSubscriptionId = req.params.id;
  const updatedNewsSubscription = req.body;
  try {
    await subsService.updateNewsSubscription(newsSubscriptionId, updatedNewsSubscription);
    res.json({ message: 'News subscription updated successfully' });
  } catch (err) {
    console.error('Error while updating news subscription', err.message);
    next(err);
  }
});

// DELETE a news subscription by ID
router.delete('/:id', async (req, res, next) => {
  const newsSubscriptionId = req.params.id;
  try {
    await subsService.deleteNewsSubscription(newsSubscriptionId);
    res.json({ message: 'News subscription deleted successfully' });
  } catch (err) {
    console.error('Error while deleting news subscription', err.message);
    next(err);
  }
});

module.exports = router;
