import Todo from "../model/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title
    })
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}