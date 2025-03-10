const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

router.post("/", async (req, res) => {
    try {
      const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        users: req.body.users,
        tickets: []
      });
  
      await newProject.save();
      res.json(newProject);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });