const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/usersRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/admin', userRoutes);

app.listen(3000);