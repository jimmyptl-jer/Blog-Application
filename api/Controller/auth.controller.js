import User from "../Models/user.models.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

import { errorHandler } from "../Utils/Error.js";

export const registerUser = async (req, res, next) => {
  try {
    // Extracting user input from the request body
    const { firstName, lastName, username, email, password } = req.body;

    // Check if any required field is missing or empty
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    // Check if the username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return next(errorHandler(409, "Username or email already exists"));
    }

    // Hash the password using bcrypt
    const hashPassword = bcrypt.hashSync(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashPassword
    });

    // Save the new user to the database
    await newUser.save();


    const token = jwt.sign(
      {
        userId: newUser._id,
        isAdmin: newUser.isAdmin
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );


    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 864000
    })

    // Respond with success message
    res.status(201).json({
      message: "Sign up successful"
    });
  } catch (error) {
    // Handle unexpected errors and forward to the error handler
    next(errorHandler(500, "Sorry! Something went wrong"));
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(errorHandler(400, "Email is missing"));
  }

  if (!password) {
    return next(errorHandler(400, 'Password is missing'));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "Invalid Credentials"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, "Invalid Credentials"));
    }

    const token = jwt.sign(
      {
        userId: validUser._id,
        isAdmin: validUser.isAdmin
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const { password: pass, ...rest } = validUser._doc

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 864000
    })
    res.status(200).json(rest)
  } catch (error) {
    return next(error);
  }
};

