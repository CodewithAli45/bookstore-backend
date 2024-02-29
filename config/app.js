const express = require('express');
const cors = require('cors');
const dbConnection = require('./db');
const authRouter = require('../routes/authRoutes');
const userRouter = require('../routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors());

dbConnection();

app.use('/api/v1/authorization', authRouter);
app.use('/api/v1/Users', userRouter);

module.exports = app;