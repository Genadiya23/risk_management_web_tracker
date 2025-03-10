const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: { type: String, enum: ["low", "medium", "high"] },
  status: { type: String, enum: ["open", "in progress", "closed"], default: "open" },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }
});

module.exports = mongoose.model("Ticket", TicketSchema);