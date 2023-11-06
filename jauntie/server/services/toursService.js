const mysql = require('mysql2/promise');
const config = require('../config');

async function getTours() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Tours');
  return results;
}

async function getTourById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Tours WHERE id = ?', [id]);
  return results[0];
}

async function createTour(newTour) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Tours (title, description, start_date, end_date, location, price) VALUES (?, ?, ?, ?, ?, ?)',
    [newTour.title, newTour.description, newTour.start_date, newTour.end_date, newTour.location, newTour.price]
  );
  return result.insertId;
}

async function updateTour(id, updatedTour) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE Tours SET title = ?, description = ?, start_date = ?, end_date = ?, location = ?, price = ? WHERE id = ?',
    [
      updatedTour.title,
      updatedTour.description,
      updatedTour.start_date,
      updatedTour.end_date,
      updatedTour.location,
      updatedTour.price,
      id
    ]
  );
}

async function deleteTour(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM Tours WHERE id = ?', [id]);
}

module.exports = {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
