import mongoose from "mongoose";

/** 
  * @description This function is used to connect to MongoDB.
  * @param {string} MONGO_URI - The MongoDB URI.
  * @returns {Promise<void>}
  */
const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;