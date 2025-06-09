import { useAuthStore } from '../store/session.js'

function getAuthHeaders() {
  const authStore = useAuthStore()
  return {
    Authorization: `${authStore.token}`,
  }
}

export { getAuthHeaders }
