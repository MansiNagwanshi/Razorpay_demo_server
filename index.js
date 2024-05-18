const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = 8080;
const routes = require("./routes");
var cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI) // here please replace this varable adding a mongoDb atlas deployed URL
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error Connecting The Database: ", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
