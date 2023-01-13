// require express
const express = require("express");

// app api end point JS Object
const projectData = { 0: {}, 1: {} };

// make instance of express
const app = express();

/* dependencies */
const bodyParser = require("body-parser");

/* use middleware */

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use cors
const cors = require("cors");
app.use(cors());

/* initialize the main project folder */
app.use(express.static("website"));

// listen to server
const port = 5000;
app.listen(port || 4000, () => {
  console.log("server is running");
  console.log("on port " + port);
});

/* routes */
// ## post
app.post("/post", (req, res) => {
  for (let ind in projectData) {
    projectData[ind] = req.body;
    console.log(ind);
  }
  // projectData[0] = req.body;
  console.log(projectData);
});
// ## get
app.get("/get", (req, res) => {
  console.log(projectData);
  res.send(projectData);
});
