import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets from the API
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets'); // Adjust the API endpoint as needed
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const updateTicketStatus = async (ticketId, newStatus) => {
    try {
      await axios.put(`/api/tickets/${ticketId}`, { status: newStatus });
      // Update the local state to reflect the change
      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket._id === ticketId ? { ...ticket, status: newStatus } : ticket
        )
      );
    } catch (error) {
      console.error('Error updating ticket status:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket._id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.status}</td>
              <td>
                <button onClick={() => updateTicketStatus(ticket._id, 'Open')}>Open</button>
                <button onClick={() => updateTicketStatus(ticket._id, 'In Progress')}>In Progress</button>
                <button onClick={() => updateTicketStatus(ticket._id, 'Closed')}>Close</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
