const Users = require('../models/usersModels');

module.exports.getUser = async (req, res, next) => {
  const data = await Users.get(req.params.id);
  res.send(data[0][0]);
}

module.exports.postUser = (req, res, next) => {
  const name = req.query.name;
  const email = req.query.email;
  const password = req.query.password;
  const newUser = new Users(name, email, password);
  res.send(newUser);
}

module.exports.putUser = (req, res, next) => {
  
}

module.exports.deleteUser = (req, res, next) => {

}