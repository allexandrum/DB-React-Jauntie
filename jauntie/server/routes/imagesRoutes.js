const express = require('express');
const router = express.Router();
const imagesService = require('../services/imagesService');

// GET all images
router.get('/', async (req, res, next) => {
  try {
    const images = await imagesService.getImages();
    res.json(images);
  } catch (err) {
    console.error('Error while getting images', err.message);
    next(err);
  }
});

// GET an image by ID
router.get('/:id', async (req, res, next) => {
  const imageId = req.params.id;
  try {
    const image = await imagesService.getImageById(imageId);
    res.json(image);
  } catch (err) {
    console.error('Error while getting image', err.message);
    next(err);
  }
});

// POST a new image
router.post('/', async (req, res, next) => {
  const newImage = req.body;
  try {
    const imageId = await imagesService.createImage(newImage);
    res.json({ message: 'Image created successfully', imageId });
  } catch (err) {
    console.error('Error while creating image', err.message);
    next(err);
  }
});

// PUT to update an existing image
router.put('/:id', async (req, res, next) => {
  const imageId = req.params.id;
  const updatedImage = req.body;
  try {
    await imagesService.updateImage(imageId, updatedImage);
    res.json({ message: 'Image updated successfully' });
  } catch (err) {
    console.error('Error while updating image', err.message);
    next(err);
  }
});

// DELETE an image by ID
router.delete('/:id', async (req, res, next) => {
  const imageId = req.params.id;
  try {
    await imagesService.deleteImage(imageId);
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    console.error('Error while deleting image', err.message);
    next(err);
  }
});

module.exports = router;
