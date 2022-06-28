const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin', userRoutes);

app.listen(3000);