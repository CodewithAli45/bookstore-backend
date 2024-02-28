const express = require('express');
const cors = require('cors');
const dbConnection = require('./db');
const userRouter = require('../routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors());

dbConnection();

app.use('/api/v1/user', userRouter);

module.exports = app;