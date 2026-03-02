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

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }
    
    res.json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }

    res.json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }

    res.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}