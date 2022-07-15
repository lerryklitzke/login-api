const Auth = require('../models/authModels');

module.exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const authorized = await Auth.login(username, password);
  if (authorized) {
    req.session.logged = true;
    console.log(req.body);
    res.json({ authenticated: true });
  } else {
    res.status(404);
  }
}

module.exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('http://localhost:8080/');
  });
}

module.exports.csrfToken = async (req, res, next) => {
  res.send({ csrfToken: req.csrfToken() });
}