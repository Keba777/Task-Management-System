import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected MongoDB");
  } catch (error) {
    console.log("Cannot connect to MongoDB", error);
  }
};
