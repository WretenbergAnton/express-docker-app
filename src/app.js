import express from 'express'
import todoRouter from './routes/todoRoutes.js'
import errorHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

app.use('/api/todos', todoRouter)
app.use(errorHandler)

export default app