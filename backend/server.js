//require authentication
import { requireAuth } from '@clerk/express'

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const projectRoutes = require("./routes/projectroutes");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/projects", require("./routes/projectroutes"), requireAuth());

app.use("/api/tickets", require("./routes/ticket"), requireAuth());

app.get("/api", (req, res) => {
  res.json({testing:[ "data", "from","backend"]});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));