import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use the MONGO_URI environment variable to connect to the MongoDB database
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Optional: To suppress deprecation warning regarding collection.ensureIndex
      useFindAndModify: false, // Optional: To suppress deprecation warning regarding findOneAndUpdate
    });
    console.log('Mongo Connected');
  } catch (error) {
    // Handle any errors that occur during the database connection
    console.error('Error while connecting to the database', error);
    process.exit(1); // Exit the Node.js process with a non-zero exit code to indicate an error
  }
}

export default connectDB;