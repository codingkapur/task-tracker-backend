const mongoose = require("mongoose");

//Create Schema for Tasks
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a task"],
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  completed: {
      type: Boolean,
      default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
