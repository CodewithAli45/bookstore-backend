const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.DB_URL;

const dbConnection = async () => {
    try {
        const connected = await mongoose.connect(url);
        console.log("Connected to database successfully", connected.connection.host);
    } catch (error) {
        console.log("Error in connecting to database, ", error);
    }
}

module.exports = dbConnection