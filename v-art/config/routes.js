import express from 'express'

import { 
  getAllArtwork, 
  getArtworkById, 
  createArtwork, 
  updateArtwork, 
  deleteArtwork 
} from '../controllers/artController.js'

const router = express.Router()

// * Index - list all artwork
// * CREATE - add new artwork to the database
// Method: GET
router.route('/artwork')
  .get(getAllArtwork)
  .post(createArtwork)

// * Single Artwork - find singular artwork by ID
// * UPDATE - update existing artwork by ID
// * DELETE - delete existing artwork by ID
router.route('/artwork/:id')
  .get(getArtworkById)
  .put(updateArtwork)
  .delete(deleteArtwork)

export default router