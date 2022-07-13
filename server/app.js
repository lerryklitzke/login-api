const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const csrf = require('csurf');

const MySQLStore = require('express-mysql-session')(session);
const csrfProtection = csrf();

const options = {
  host: 'localhost',
  user: 'root',
  password: 'paranaue',
  database: 'node-sql',
};
const sessionStore = new MySQLStore(options);

const userRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use('/admin', userRoutes);
app.use('/auth', authRoutes);

app.listen(3000);
