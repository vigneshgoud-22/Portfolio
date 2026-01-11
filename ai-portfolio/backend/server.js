const express = require("express");
const cors = require("cors");
const projects = require("./projects.json");

const app = express();
app.use(cors());

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, () => console.log("Server running on port 5000"));
