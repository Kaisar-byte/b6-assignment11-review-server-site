const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("assignment 11 project server is running");
});

app.listen(port, () => {
  console.log(`assignment 11 project server is running on port ${port}`);
});
