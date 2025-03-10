const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }]
});

module.exports = mongoose.model("Project", ProjectSchema);