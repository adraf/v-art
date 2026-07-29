import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true, 
    maxlength: 50,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
    required: true,
  },
})

userSchema
  .virtual('passwordConfirmation')
  .set(function(value) {
    this._passwordConfirmation = value
  })

userSchema.pre('validate', function(next){
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'Make sure the passwords match')
  }
  // if no validation is needed or passwords match, pass to next middleware
  next()
})

userSchema.pre('save', function(next) {
  if (this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next()
})

export default mongoose.model('User', userSchema)