import axios from "axios"

async function logIn(username, password) {
  try {
    console.log('user and pass', username, password)
    const response = await axios.post(
      'http://localhost:3000/login',
      { username, password },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return response.data
  } catch (error) {
    console.error(error.response)
    if(error.response && error.response.status === 401) {
        throw new Error(`L'usuari o contrasenya no son correctes`)
    }
    else {
    throw new Error('Alguna cosa ha anat malament durant l`autentiació')
    }
  }
}


export {logIn}