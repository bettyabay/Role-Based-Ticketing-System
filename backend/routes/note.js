const express = require('express')
const router = express.Router({ mergeParams: true })
const { getNotes, addNote } = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/controllers/noteController.js')

const { protect } = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/middleware/authMiddleware.js')

router
  .route('/')
  .get(protect, getNotes)
  .post(protect, addNote)

module.exports = router

// /api/tickets/:ticketId/notes