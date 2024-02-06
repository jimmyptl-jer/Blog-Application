import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo Connected');
  } catch (error) {
    console.error('Error while connecting to the database', error);
    process.exit(1);
  }
}

export default connectDB;
