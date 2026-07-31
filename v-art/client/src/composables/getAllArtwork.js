import axios from 'axios'

export async function getAllArtwork() {
  const allArtwork = await axios.get('/api/artwork')
  console.log('🖼️ -> ', allArtwork.data)
  return allArtwork.data
}
