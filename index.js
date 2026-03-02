import 'dotenv/config'
import express from 'express'

import connectDB from './src/config/db.js'
import todoRouter from './src/routes/todoRoutes.js'
import errorHandler from './src/middleware/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 3001
const APP_NAME = process.env.APP_NAME || 'Express App'

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: `Hej från ${APP_NAME}!`, version: '2.0' });
})

app.use('/api/todos', todoRouter)

app.use(errorHandler)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})