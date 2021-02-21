// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const todoRoutes = require("./routes");

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
// connect database
const config = require("./config/key");

mongoose
  .connect(config.mongoURI, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// create server
const app = express();

// config middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api/todos", todoRoutes);

// run server
app.listen(5000, () => console.log("Server is running on port 5000"));
