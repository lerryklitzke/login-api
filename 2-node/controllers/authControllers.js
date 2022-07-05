const Auth = require('../models/authModels');

module.exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const authorized = await Auth.login(username, password);

  if (authorized) {
    req.session.logged = authorized;
    res.redirect('http://localhost:8080/home');
  } else {
    res.redirect('http://localhost:8080/login');
  }
}

module.exports.logout = async (req, res, next) => {

}