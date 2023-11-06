const express = require('express');
const router = express.Router();
const toursService = require('../services/toursService');

// Get all tours
router.get('/tours', async (req, res, next) => {
  try {
    const tours = await toursService.getTours();
    res.json(tours);
  } catch (err) {
    console.error(`Error while getting tours: ${err.message}`);
    next(err);
  }
});

// Get a specific tour by ID
router.get('/tours/:id', async (req, res, next) => {
  const tourId = req.params.id;
  try {
    const tour = await toursService.getTourById(tourId);
    if (!tour) {
      res.status(404).json({ message: 'Tour not found' });
    } else {
      res.json(tour);
    }
  } catch (err) {
    console.error(`Error while getting tour by ID: ${err.message}`);
    next(err);
  }
});

// Create a new tour
router.post('/tours', async (req, res, next) => {
  const newTourData = req.body;
  try {
    const newTourId = await toursService.createTour(newTourData);
    res.status(201).json({ message: 'Tour created successfully', id: newTourId });
  } catch (err) {
    console.error(`Error while creating a tour: ${err.message}`);
    next(err);
  }
});

// Update an existing tour by ID
router.put('/tours/:id', async (req, res, next) => {
  const tourId = req.params.id;
  const updatedTourData = req.body;
  try {
    await toursService.updateTour(tourId, updatedTourData);
    res.json({ message: 'Tour updated successfully' });
  } catch (err) {
    console.error(`Error while updating a tour: ${err.message}`);
    next(err);
  }
});

// Delete a tour by ID
router.delete('/tours/:id', async (req, res, next) => {
  const tourId = req.params.id;
  try {
    await toursService.deleteTour(tourId);
    res.json({ message: 'Tour deleted successfully' });
  } catch (err) {
    console.error(`Error while deleting a tour: ${err.message}`);
    next(err);
  }
});

module.exports = router;
