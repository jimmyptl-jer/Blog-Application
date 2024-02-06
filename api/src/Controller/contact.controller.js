import Contact from "../Models/contact.model.js";

// Function to add a new contact
export const addNewContact = async (req, res) => {
  try {
    // Create a new "Contact" instance with the request body data
    const newContact = new Contact(req.body);

    // Save the new contact to the database
    const savedContact = await newContact.save();

    // Respond with the saved contact as JSON
    res.json(savedContact);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    res.status(500).send({ message: error.message });
  }
};
