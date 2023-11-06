const mysql = require('mysql2/promise');
const config = require('../config');

async function getImages() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Images');
  return results;
}

async function getImageById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Images WHERE id = ?', [id]);
  return results[0];
}

async function createImage(newImage) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Images (filename, uploaded_at, tour_id) VALUES (?, ?, ?)',
    [newImage.filename, newImage.uploaded_at, newImage.tour_id]
  );
  return result.insertId;
}

async function updateImage(id, updatedImage) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE Images SET filename = ?, uploaded_at = ?, tour_id = ? WHERE id = ?',
    [updatedImage.filename, updatedImage.uploaded_at, updatedImage.tour_id, id]
  );
}

async function deleteImage(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM Images WHERE id = ?', [id]);
}

module.exports = {
  getImages,
  getImageById,
  createImage,
  updateImage,
  deleteImage,
};
