import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    throw new Error("Connection failed!");
  }
};

export default dbConnection;
