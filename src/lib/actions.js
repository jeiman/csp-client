import api from './axios'
import logger from './logger'

export async function getSomething (id) {
  return api
    .get(`/xx/${id}/xx`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      logger(`Error fetching users profile: ${error}`, 'error')
    })
}
