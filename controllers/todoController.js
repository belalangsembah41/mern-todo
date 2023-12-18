const TodoModel = require("../models/todoModel");
const mongoose = require("mongoose");

// GET all Todo's
const getAllTodo = async (req, res) => {
  const todo = await TodoModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(todo);
};

// POST a new Todo
const postTodo = async (req, res) => {
  const { todo } = req.body;

  try {
    const newTodo = await TodoModel.create({ todo });
    res.status(200).json(newTodo);
    console.log(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a Todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ Message: "No Todo's Today !!!" });
  }

  const todo = await TodoModel.findByIdAndDelete({ _id: id });

  if (!todo) {
    res.status(404).json({ Message: "No Todo's Today !!!" });
  }

  res.status(200).json(todo);
};

// UPDATE a Todo
const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ Message: "No Todo's Today !!!" });
  }

  const todo = await TodoModel.findOneAndUpdate({ _id: id }, req.body);

  if (!todo) {
    return res.status(404).json({ Message: "No Todo's Today !!!" });
  }

  res.status(200).json(todo);
};

module.exports = {
  getAllTodo,
  postTodo,
  deleteTodo,
  updateTodo,
};
