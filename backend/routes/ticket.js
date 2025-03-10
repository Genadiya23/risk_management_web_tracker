const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");
const Project = require("../models/Project");

// Create a new ticket
router.post("/create", async (req, res) => {
    try {
        const { title, description, projectId } = req.body;
        const ticket = new Ticket({ title, description, projectId });
        await ticket.save();

        // Add ticket to project
        await Project.findByIdAndUpdate(projectId, { $push: { tickets: ticket._id } });

        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Assign a ticket to a user
router.put("/:ticketId/assign", async (req, res) => {
    try {
        const { ticketId } = req.params;
        const { userId } = req.body; // Assume frontend sends the user ID

        const ticket = await Ticket.findByIdAndUpdate(ticketId, { assignedTo: userId }, { new: true });
        if (!ticket) return res.status(404).json({ message: "Ticket not found" });

        res.json(ticket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all tickets for a project
router.get("/project/:projectId", async (req, res) => {
    try {
        const { projectId } = req.params;
        const tickets = await Ticket.find({ projectId }).populate("assignedTo");

        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific ticket by ID
router.get("/:ticketId", async (req, res) => {
    try {
        const { ticketId } = req.params;
        const ticket = await Ticket.findById(ticketId).populate("assignedTo");
        if (!ticket) return res.status(404).json({ message: "Ticket not found" });

        res.json(ticket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
