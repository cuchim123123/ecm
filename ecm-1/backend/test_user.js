const mongoose = require("mongoose");
const User = require("./src/models/users");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Connection error:", err));

async function testUser() {
  try {
    const newUser = new User({
      firstName: "Thien",
      lastName: "Nguyen Duy",
      email: "NguyenDuyThien@gmail.com",
      password: "03032004",
      phone: "0906364541",
      role: "customer",
      verified: true
    });

    const savedUser = await newUser.save();
    console.log("User saved successfully:");
    console.log(savedUser);
  } catch (err) {
    console.error("Error creating user:", err);
  } finally {
    mongoose.connection.close();
  }
}

testUser();
