// Import the 'express' module
import express from 'express';

// Import controller functions for handling contact operations
import {
  addNewContact
} from '../Controller/contact.controller.js';

// Create an Express Router instance
const router = express.Router();

// Define routes for various contact operations:


// Route: POST '/api/contacts'
// Description: Add a new contact
router.post('/', addNewContact);

// Export the router for use in other parts of the application
export default router;