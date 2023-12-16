const express = require("express");
const {
  postTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

// GET all Todo's
router.get("/", getAllTodo);

// POST a new Todo
router.post("/", postTodo);

// DELETE a Todo
router.delete("/:id", deleteTodo);

// UPDATE a Todo
router.patch("/:id", updateTodo);

module.exports = router;
