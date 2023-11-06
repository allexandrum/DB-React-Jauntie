const mysql = require('mysql2/promise');
const config = require('../config');

async function getUsers() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Users');
  return results;
}

async function getUserById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
  return results[0];
}

async function createUser(newUser) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Users (username, email, password, role, created_at) VALUES (?, ?, ?, ?, ?)',
    [newUser.username, newUser.email, newUser.password, newUser.role, newUser.created_at]
  );
  return result.insertId;
}

async function updateUser(id, updatedUser) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE Users SET username = ?, email = ?, password = ?, role = ?, created_at = ? WHERE id = ?',
    [updatedUser.username, updatedUser.email, updatedUser.password, updatedUser.role, updatedUser.created_at, id]
  );
}

async function deleteUser(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM Users WHERE id = ?', [id]);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
