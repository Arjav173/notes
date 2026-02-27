const mongoose = require('mongoose');

async function connectDB(){
     try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}
connectDB();
module.exports = mongoose.connection;