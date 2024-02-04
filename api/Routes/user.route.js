import express from 'express';
import User from '../Models/user.models.js'

import verifyToken from '../Middleware/auth.js';

import { logout } from '../Controller/user.controller.js';
const router = express.Router();

router.get('/currentUser', verifyToken, async (req, res) => {
  const userId = req.userId

  try {
    const user = await User.findById(userId).select('-password')
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'something went wrong' })
  }
})

router.post('/logout', logout)

export default router;
