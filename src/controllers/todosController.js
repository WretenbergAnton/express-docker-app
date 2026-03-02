import Todo from "../model/Todo.js";

export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find()
    res.json(todos)
  } catch (error) {
    next(error)
  }
}

export const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }

    res.json(todo)
  } catch (error) {
    next(error)
  }
}

export const createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create({ title: req.body.title })
    res.status(201).json(todo)
  } catch (error) {
    next(error)
  }
}

export const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after' }
    )

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }

    res.json(todo)
  } catch (error) {
    next(error)
  }
}

export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }

    res.json({ message: 'Todo deleted successfully' })
  } catch (error) {
    next(error)
  }
}