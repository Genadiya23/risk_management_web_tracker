const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({testing:[ "data", "from","backend"]});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));