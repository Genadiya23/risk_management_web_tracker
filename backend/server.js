const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const projectRoutes = require("./routes/projectroutes");
require("dotenv").config();
const mongoose = require("mongoose");
const {requireAuth} = require("@clerk/express")
const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/projects", requireAuth(),require("./routes/projectroutes"));

app.use("/api/tickets", requireAuth(),require("./routes/ticket"));

app.get("/", (req,res) =>{
  res.send("testing")
})

app.get("/api", (req, res) => {
  res.json({testing:[ "data", "from","backend"]});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));