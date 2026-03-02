import 'dotenv/config'
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'
import request from 'supertest'
import mongoose from 'mongoose'
import app from '../app.js'
import Todo from '../model/Todo.js'

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI)
})

beforeEach(async () => {
  await Todo.deleteMany()
})

afterAll(async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
})

describe('GET /api/todos', () => {
  it('should return an empty array', async () => {
    const res = await request(app).get('/api/todos')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })
})

describe('POST /api/todos', () => {
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Test todo' })
    expect(res.status).toBe(201)
    expect(res.body.title).toBe('Test todo')
    expect(res.body.completed).toBe(false)
  })

  it('should return 400 if title is missing', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({})
    expect(res.status).toBe(400)
  })
})