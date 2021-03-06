const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password; 
  }

  static get(id) {
    return db.execute(`
      SELECT * FROM users 
      WHERE id = ${id}
    `);
  }

  static async getUserByEmail(email) {
    const validUser = await db.execute(`
      SELECT * FROM users
      WHERE email = '${email}'
    `);
    return validUser[0][0];
  }

  static postUser(name, email, password) {
    db.execute(`
      INSERT INTO users (name, email, password) 
      VALUES ('${name}', '${email}', '${password}')
    `);
  }

  static put(id, name, email, password) {
    db.execute(`
      UPDATE users
      SET name=${name}, email=${email}, password=${password} 
      WHERE id=${id}`);
  }

  delete(id) {
    db.execute(`
      DELETE FROM users
      WHERE id=${id}
    `)
  }
}