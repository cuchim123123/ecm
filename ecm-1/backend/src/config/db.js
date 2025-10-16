const mongoose = require ("mongoose");
const dotenv = require ("dotenv");

dotenv.config();
const CONNECTION_URL = process.env.MONGO_URI;

const connectDB = async () =>{
    try {
        await mongoose.connect(CONNECTION_URL);
        console.log ("MongoDB connected", mongoose.connection.db.databaseName);
    }
    catch (error){
        console.log ("Error connecting to MongoDB", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;