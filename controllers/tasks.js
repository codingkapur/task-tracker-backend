const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if(!tasks){
      return res.status(404).send( "No task found!")
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if(!task){
      return res.status(404).json({msg: "No such task found!"})
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new:true,
      runValidators:true
    });
    if(!task){
      return res.status(404).json({msg: "No such task found!"})
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (!task) {
      return res.status(500).send("This task does not exist foo!");
    }
    res.status(200).send("Task Deleted Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
