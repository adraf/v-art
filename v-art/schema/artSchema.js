import mongoose from 'mongoose'

const artSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageHighResUrl: {
    type: String,
    required: false,
  },
  imageLowResUrl: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    enum: ['available', 'sold', 'coming soon'],
    default: 'available',
    required: true,
  },
})

export default mongoose.model('Art', artSchema)