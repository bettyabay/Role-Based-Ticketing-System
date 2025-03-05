const express = require('express')
const router = express.Router()
const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket
} = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/controllers/ticketController.js')

const { protect } = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/middleware/authMiddleware.js')

// Re-route into note router
const noteRouter = require('C:/Users/USER/Desktop/Role-Based-Ticketing-System/backend/routes/note.js')
router.use('/:ticketId/notes', noteRouter)

// Protected route to create the ticket
router
  .route('/')
  .get(protect, getTickets)
  .post(protect, createTicket)

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

module.exports = router