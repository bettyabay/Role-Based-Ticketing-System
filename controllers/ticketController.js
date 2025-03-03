const Ticket = require('../models/ticket'); // Adjust path as needed

//Implement createTicket function 
exports.createTicket = async (req, res) => {
  try {
    const { title, description, priority, category} = req.body;
    const ticket = new Ticket({ title, description, userId: req.userId, priority, category });
    await ticket.save();
    res.status(201).json({ message: 'Ticket created successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create ticket', error: error.message });
  }
};


//Implement getAllTickets function
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.userId });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get tickets', error: error.message });
  }
};


//Implement getTicketbyId function
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get ticket', error: error.message });
  }
};



//Implement updateTicket function
exports.updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update ticket', error: error.message });
  }
};