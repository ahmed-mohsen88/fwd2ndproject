// require
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// make instance of express
const app = express();

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("../website"));

// listen to server
const port = 5000;
app.listen(port || 4000, () => {
  console.log("server is running");
  console.log("on port " + port);
});

const projectData = [
  {
    temperature: "test",
    date: "test",
    userResponse: "test",
  },
];
// routes
app.post("/post", (req, res) => {
  projectData.push(req.body);
  console.log(projectData);
});
app.get("/get", (req, res) => {
  console.log(projectData);
  res.send(projectData);
});
