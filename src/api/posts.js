const BASE_URL = 'http://localhost:3000'
import axios from 'axios'

async function getAllPosts(limit, offset) {
  try {
    const response = await axios.get(`${BASE_URL}/posts?limit=${limit}&offset=${offset}`)
    return response.data
  } catch (error) {
    console.error('Response:', error)
    throw new Error('Alguna cosa ha anat malament carregant els posts')
  }
}

export { getAllPosts }
