import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)

function setUser(newUser, newToken) {
    user.value = newUser
    token.value = newToken

}


function logOut() {
    user.value = null;
    token.value = null;
}
return {user, token, setUser, logOut}
}
)