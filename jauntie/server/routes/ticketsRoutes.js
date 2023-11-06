const express = require('express');
const router = express.Router();
const ticketsService = require('../services/ticketsService');

// GET all tickets
router.get('/', async (req, res, next) => {
  try {
    const tickets = await ticketsService.getTickets();
    res.json(tickets);
  } catch (err) {
    console.error('Error while getting tickets', err.message);
    next(err);
  }
});

// GET a ticket by ID
router.get('/:id', async (req, res, next) => {
  const ticketId = req.params.id;
  try {
    const ticket = await ticketsService.getTicketById(ticketId);
    res.json(ticket);
  } catch (err) {
    console.error('Error while getting ticket', err.message);
    next(err);
  }
});

// POST a new ticket
router.post('/', async (req, res, next) => {
  const newTicket = req.body;
  try {
    const ticketId = await ticketsService.createTicket(newTicket);
    res.json({ message: 'Ticket created successfully', ticketId });
  } catch (err) {
    console.error('Error while creating ticket', err.message);
    next(err);
  }
});

// PUT to update an existing ticket
router.put('/:id', async (req, res, next) => {
  const ticketId = req.params.id;
  const updatedTicket = req.body;
  try {
    await ticketsService.updateTicket(ticketId, updatedTicket);
    res.json({ message: 'Ticket updated successfully' });
  } catch (err) {
    console.error('Error while updating ticket', err.message);
    next(err);
  }
});

// DELETE a ticket by ID
router.delete('/:id', async (req, res, next) => {
  const ticketId = req.params.id;
  try {
    await ticketsService.deleteTicket(ticketId);
    res.json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    console.error('Error while deleting ticket', err.message);
    next(err);
  }
});

module.exports = router;
