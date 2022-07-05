const User = require('./usersModels');

module.exports = class Auth {

  static async login(email, password) {
    const user = await User.getUserByEmail(email);
    if (user === undefined) {
      return false;
    } else if (user.password !== password) {
      return false;
    } else {
      return true;
    }
  }

  static async logout(email) {

  }
}