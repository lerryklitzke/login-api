const bcrypt = require('bcryptjs');
const User = require('./usersModels');

module.exports = class Auth {

  static async login(email, password) {
    const user = await User.getUserByEmail(email);

    if (!user) {
      return false;
    } else {
      const validPass = await bcrypt.compare(password, user.password);
      
      if (!validPass) {
        return false;
      } else {
        return true;
      }
    }
  }

  static async logout(email) {

  }
}