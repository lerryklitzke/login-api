const bcrypt = require('bcryptjs');
const Users = require('../models/usersModels');

module.exports.getUser = async (req, res, next) => {
  const data = await Users.get(req.params.id);
  res.send(data[0][0]);
}

module.exports.postNewUser = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const encryptedPass = await bcrypt.hash(password, 12);
  Users.postUser(name, email, encryptedPass);
  res.redirect('http://localhost:8080/login');
}

module.exports.putUser = (req, res, next) => {
  
}

module.exports.deleteUser = (req, res, next) => {

}