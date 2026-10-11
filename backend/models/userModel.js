const pool = require('../config/db');

const findUserByEmail = async (email) => {
  try {
    const result = await pool.query(
      `SELECT u.*, r.name AS role_name
       FROM users u
       JOIN roles r ON r.id = u.role_id
       WHERE u.email = $1`,
      [email]
    );
    return result.rows[0];
  } catch (error) {
    return null;
  }
};

const findUserById = async (id) => {
  try {
    const result = await pool.query(
      `SELECT u.*, r.name AS role_name
       FROM users u
       JOIN roles r ON r.id = u.role_id
       WHERE u.id = $1`,
      [id]
    );
    return result.rows[0];
  } catch (error) {
    return null;
  }
};

module.exports = {
  findUserByEmail,
  findUserById
};
