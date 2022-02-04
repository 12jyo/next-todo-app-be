const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("todos", schema);