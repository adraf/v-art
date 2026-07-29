import 'dotenv/config'
import mongoose from 'mongoose'
import Art from '../schema/artSchema.js'
import artworkData from './data/artwork-seed.js'

const connectionString = process.env.MONGO_URI

async function seed() {
  try {
    // Establish connection to DB
    await mongoose.connect(connectionString)
    console.log('✅ Database connection achieved')
    // Clear existing data
    const { deletedCount } = await Art.deleteMany()
    console.log(`🚮 Deleted ${deletedCount} pieces of artwork from the DB`)
    // Add seed data into DB
    const artworkCreated = await Art.create(artworkData)
    console.log(`🌱 Seeded ${artworkCreated} pieces of art into the DB`)
    // Close DB connection
    await mongoose.connection.close
    console.log('🚫 Connection severed - TRY')
  } catch (error) {
    console.log(error)
    await mongoose.connection.close
    console.log('🚫 Connection severed - CATCH', connectionString)
  }
}
seed()