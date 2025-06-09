import axios from 'axios'
import { BASE_URL } from './posts'
import { getAuthHeaders } from './utils'

async function getUserByUsername(username) {
  const headers = getAuthHeaders()
  console.log(headers, username)
  try {
    const response = await axios.get(`${BASE_URL}/user/${username}`, { headers })
    console.log('responsee')
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error(`Alguna cosa ha anat malament buscant aquest usuari`)
  }
}

export { getUserByUsername }
