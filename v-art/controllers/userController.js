import bcrypt from 'bcrypt'
import User from '../schema/userSchema.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json(`Welcome ${newUser.username}`)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

export const login = async (req,res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !bcrypt.compareSync(req.body.password, userToLogin.password)) {
      throw new Error(!userToLogin ? 'Email not found' : 'Passwords don\'t match')
    }
    // install and import jwt
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET,{ expiresIn: '7d' })
    console.log('Passwords match, user is validated!')
    return res.json({ message: `Welcome back ${userToLogin.username}`, token: token })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

// * Single User
// Method: GET
// Path: /user/:userId
export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) {
      return res.status(404).json({ message: 'No user found' })
    }
    return res.json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// * Update
// Method: PUT
// Path: /user:userId
export const updateUser = async (req, res) => {
  try {
    const profile = await User.findById(req.currentUser._id)
    Object.assign(profile, req.body)
    await profile.save()
    return res.json(profile)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}