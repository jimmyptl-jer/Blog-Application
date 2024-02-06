// Import the 'mongoose' module to work with MongoDB
import mongoose from "mongoose";

// Create a Mongoose schema for the "Contact" entity
const contactSchema = new mongoose.Schema({
  // Define the 'firstName' field with the data type 'String'
  name: {
    type: String,
    required: 'Name is required' // It is required, and the message provides a custom error message if not provided.
  },
  // Define the 'email' field with the data type 'String'
  email: {
    type: String,
  },
  // Define the 'phone' field with the data type 'String'
  phone: {
    type: String,
  },
  message: {
    type: String
  },
  // Define the 'createAt' field with the data type 'Date' and a default value of the current date and time when a new contact is created
  createAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model named "Contact" using the defined schema
const Contact = mongoose.model('Contact', contactSchema);

// Export the "Contact" model to make it available for use in other parts of the application
export default Contact;