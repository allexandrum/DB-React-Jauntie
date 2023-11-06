const mysql = require('mysql2/promise');
const config = require('../config');

async function getNewsSubscriptions() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM NewsSubscriptions');
  return results;
}

async function getNewsSubscriptionById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM NewsSubscriptions WHERE id = ?', [id]);
  return results[0];
}

async function createNewsSubscription(newNewsSubscription) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO NewsSubscriptions (user_id, subscribed_at) VALUES (?, ?)',
    [newNewsSubscription.user_id, newNewsSubscription.subscribed_at]
  );
  return result.insertId;
}

async function updateNewsSubscription(id, updatedNewsSubscription) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE NewsSubscriptions SET user_id = ?, subscribed_at = ? WHERE id = ?',
    [updatedNewsSubscription.user_id, updatedNewsSubscription.subscribed_at, id]
  );
}

async function deleteNewsSubscription(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM NewsSubscriptions WHERE id = ?', [id]);
}

module.exports = {
  getNewsSubscriptions,
  getNewsSubscriptionById,
  createNewsSubscription,
  updateNewsSubscription,
  deleteNewsSubscription,
};
