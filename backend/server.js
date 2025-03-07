const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const {clerkClient} = require("@clerk/express");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req,res) => {
  const getusers = await clerkClient.users.getUserList();

  res.json(getusers)
});

// app.get("/api/proxy", async (req, res) => {
//   try {
//     const { endpoint } = req.query;
//     if (!endpoint) {
//       return res.status(400).json({ error: "Endpoint is required" });
//     }

//     // Retrieve token securely on the backend
//     const token = await getTokenFromAuthProvider(); // Replace with actual function

//     const response = await fetch(endpoint, {

//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error.message)
//     res.status(500).json({ error: "Internal Server Error", details: error.message });
//   }
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));