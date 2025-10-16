const mongoose = require("mongoose");
const connectDB = require("./src/config/db");

connectDB().then(() => {
    console.log("DB =", mongoose.connection.db.databaseName);
    console.log("Host =", mongoose.connection.host);
    console.log("Post =", mongoose.connection.port);
});