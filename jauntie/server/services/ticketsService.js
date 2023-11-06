const mysql = require('mysql2/promise');
const config = require('../config');

async function getTickets() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Tickets');
  return results;
}

async function getTicketById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Tickets WHERE id = ?', [id]);
  return results[0];
}

async function createTicket(newTicket) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Tickets (user_id, tour_id, purchase_date, purchase_state) VALUES (?, ?, ?, ?)',
    [newTicket.user_id, newTicket.tour_id, newTicket.purchase_date, newTicket.purchase_state]
  );
  return result.insertId;
}

async function updateTicket(id, updatedTicket) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE Tickets SET user_id = ?, tour_id = ?, purchase_date = ?, purchase_state = ? WHERE id = ?',
    [updatedTicket.user_id, updatedTicket.tour_id, updatedTicket.purchase_date, updatedTicket.purchase_state, id]
  );
}

async function deleteTicket(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM Tickets WHERE id = ?', [id]);
}

module.exports = {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
