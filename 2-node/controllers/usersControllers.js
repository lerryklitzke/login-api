const Users = require('../models/usersModels');

module.exports.getUser = async (req, res, next) => {
  const data = await Users.get(req.params.id);
  res.send(data[0][0]);
}

module.exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  Users.post(name, email, password);
  console.log(req.body);
  res.send();
}

module.exports.putUser = (req, res, next) => {
  
}

module.exports.deleteUser = (req, res, next) => {

}