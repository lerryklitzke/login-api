const db = require('../util/database');

module.exports = class User {
  constructor(name, email, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass; 
  }

  users() {
    return db.execute('SELECT * FROM users');
  }
}