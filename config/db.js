const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URL;
    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:");
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
