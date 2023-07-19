import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default dbConnection;
