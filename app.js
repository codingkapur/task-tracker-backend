//Import Modules
const express = require("express");
const app = express();
const api = require("./routes/api");
const connectDB = require("./db/connectDB");
require("dotenv").config();
//Set Up Middleware
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Set Up Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Task Tracker");
});

//Root route for tasks
app.use("/tasktracker", api);

const port = process.env.PORT || 4500;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
        console.log(`you are listening on port ${port}`);
      });
  } catch (error) {
    console.log(error,'ayyyy');
  }
};

start();


