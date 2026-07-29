import jwt from 'jsonwebtoken'
import User from '../schema/userSchema.js'

export const secureRoute = async (req, res, next) => {
  try {
    // Ensure Authorization header was passed with request
    if (!req.headers.authorization) throw new Error('Missing Headers')
    // Extract the token from the header, removing Bearer part
    const token = req.headers.authorization.replace('Bearer ', '')
    // With token, use a jwt method to verify the token's validity
    // If the token is valid it means the secret matches the server secret and the expiry is in date
    const payload = jwt.verify(token, process.env.SECRET)
    // Make sure the user identified by the sub in the valid token payload still exists in our database
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User not found')
    // If user still exists, pass the request to final controller with next
    next()
  } catch (error) {
    console.log(error)
    return res.json(401).json({ message: 'Unauthorised User' })
  }
}