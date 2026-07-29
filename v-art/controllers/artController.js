import Art from '../schema/artSchema.js'

// * Index - list all artwork
// Method: GET
// Path: /artwork
export const getAllArtwork = async (req, res) => {
  try {
    const artworks = await Art.find()
    if (!artworks) {
      return res.status(404).json({ message: 'No artwork found' })
    } 
    return res.json(artworks)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error retrieving artwork' })
  }
}


// * Single Artwork - find singular artwork by ID
// Method: GET
// Path: /artwork/:id
export const getArtworkById = async (req, res) => {
  try {
    const { id } = req.params
    const artwork = await Art.findById(id)
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork Not Found' })
    }
    return res.json(artwork)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error retrieving artwork' })
  }
}

// * CREATE - add new artwork to the database
// Method: POST
// Path: /artwork
export const createArtwork = async (req, res) => {
  try {
    const newArtwork = new Art({
      title: req.body.title,
      description: req.body.description,
      imageHighResUrl: req.body.imageHighResUrl,
      imageLowResUrl: req.body.imageLowResUrl,
      medium: req.body.medium,
      height: req.body.height,
      width: req.body.width,
      year: req.body.year,
      price: req.body.price,
      status: req.body.status,
    })
    const savedArtwork = await newArtwork.save()
    return res.status(201).json({ ...savedArtwork.toObject(), message: 'Artwork created successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error creating artwork' })
  }
}


// * UPDATE - change details, mark as sold/coming soon, etc.
// Method: PUT
// Path: /artwork/:id
export const updateArtwork = async (req, res) => {
  try {
    const { id } = req.params
    const updatedArtwork = await Art.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedArtwork) {
      return res.status(404).json({ message: 'Artwork Not Found' })
    }
    return res.json({ ...updatedArtwork.toObject(), message: 'Artwork updated successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error updating artwork' })
  }
}

// * DELETE
// Method: DELETE
// Path: /artwork/:id
export const deleteArtwork = async (req, res) => {
  try {
    const { id } = req.params
    const deletedArtwork = await Art.findByIdAndDelete(id)
    if (!deletedArtwork) {
      return res.status(404).json({ message: 'Artwork Not Found' })
    }
    return res.json({ ...deletedArtwork.toObject(), message: 'Artwork deleted successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error deleting artwork' })
  }
}
