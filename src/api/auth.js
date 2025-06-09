import axios from 'axios'
import { BASE_URL } from './posts'

async function logIn(username, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { username, password },
      { headers: { 'Content-Type': 'application/json' } },
    )
    return response.data
  } catch (error) {
    console.error(error.response)
    if (error.response && error.response.status === 401) {
      throw new Error(`L'usuari o contrasenya no son correctes`)
    } else {
      throw new Error('Alguna cosa ha anat malament durant l`autentiació')
    }
  }
}

export { logIn }
