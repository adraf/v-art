import express from 'express'
import { v4 as uuid } from 'uuid'
import mongoose, { mongo } from 'mongoose'
import 'dotenv/config'
import router from './config/routes.js'

const app = express()
const port = process.env.PORT
const connectionString = process.env.MONGO_URI

app.use('/api', router)
app.use(express.json())

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(port, () => {
      console.log(`🎨 - Server listening on port ${port}`)
    })
    console.log('🔌 Connected to MongoDB')
  } catch (error) {
    console.error('🚫 Error connecting to MongoDB:', error)
  }
}
connectToDatabase()
