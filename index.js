import express from 'express'

const app = express()
const PORT = process.env.PORT || 3040
const APP_NAME = process.env.APP_NAME || 'Express App'

app.get('/', (req, res) => {
  res.json({ message: `Hej från ${APP_NAME}!`, version: '2.0' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})