const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/usersRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: false }));

app.use('/admin', userRoutes);

app.listen(3000);