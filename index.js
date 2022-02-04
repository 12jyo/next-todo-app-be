require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "todo-list-db"
}).then(() => {
  console.log("Connected to database");
  require("./router")(app);
  app.listen(5000);
  console.log("listening on 5000");
});