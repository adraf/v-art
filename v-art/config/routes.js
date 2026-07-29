import express from 'express'

// Artwork
import { 
  getAllArtwork, 
  getArtworkById, 
  createArtwork, 
  updateArtwork, 
  deleteArtwork 
} from '../controllers/artController.js'
// Users
import {
  getSingleUser,
  updateUser,
  login,
  register
} from '../controllers/userController.js'
// Routing
import { secureRoute } from '../config/secureRoute.js'

const router = express.Router()

// * Artwork
// Index - list all artwork
// CREATE - add new artwork to the database
router.route('/artwork')
  .get(getAllArtwork)
  .post(secureRoute, createArtwork)

// Single Artwork - find singular artwork by ID
// UPDATE - update existing artwork by ID
// DELETE - delete existing artwork by ID
router.route('/artwork/:id')
  .get(getArtworkById)
  .put(secureRoute, updateArtwork)
  .delete(secureRoute, deleteArtwork)

// * Users
// Single User - find singular user by ID
// UPDATE - update existing artwork by ID
router.route('/user/:userId')
  .get(getSingleUser)
  .put(secureRoute, updateUser)

// * Login and Register
router.route('/register')
  .post(register)

router.route('/login')
  .post(login)
export default router