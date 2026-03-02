const errorHandler = (err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid id' })
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message })
  }

  res.status(500).json({ message: err.message })
}

export default errorHandler