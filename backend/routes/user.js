const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe
} = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/controllers/userController.js')

const { protect } = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/middleware/authMiddleware.js')

router.post('/', registerUser)

router.post('/login', loginUser)

// Protected route (2nd argument) - protect
router.get('/me', protect, getMe)

module.exports = router