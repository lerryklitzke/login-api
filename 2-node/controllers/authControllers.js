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

module.exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('http://localhost:8080/');
  });
}

module.exports.protectRoute = (req, res, next) => {
  if (!req.session.logged) {
    return res.redirect('http://localhost:8080/login');
  }
  next();
}