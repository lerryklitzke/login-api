const express = require('express');
const database = require('./util/database');

const app = express();

database.execute('SELECT * FROM users');

app.use()

app.listen(3000);