const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, ticketController.createTicket);
router.get('/', authMiddleware, ticketController.getAllTickets);
router.get('/:id', authMiddleware, ticketController.getTicketById);
router.put('/:id', authMiddleware, ticketController.updateTicket);

module.exports = router;