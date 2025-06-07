<template>
    <form @submit.prevent="handleLogin" class="login-form">
        <p v-if="error" class="error">{{ error }}</p>
        <label for="username">Username:
        </label>
                    <input v-model="username" type="text" id="username" name="username" required>
        <label for="password">Password:
        </label>
                   <input v-model="password" type="password" id="password" name="password" required>
        <button type="submit">Login</button>
    </form>
</template>

<script setup>
import {ref} from 'vue'
import {logIn} from '../api/auth.js'
import {useAuthStore} from '../store/session.js'

const username = ref('')
const password = ref('')
const error = ref('')
const authStore = useAuthStore()

async function handleLogin() {
    console.log('uz n pazz', username.value, password.value)
    try {
        const response = await logIn(username.value, password.value)
        authStore.setUser(response.user, response.token)
        console.log('auth store', authStore)
        console.log('response: ', response, 'data: ', username.value, password.value)
    }
    catch(err) {
        error.value = err.message || 'Alguna cosa ha anat malament'
    }
}
</script>

<style scoped>
.login-form {
    padding: 2rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.login-form input {
    width: 80%;
    background-color: aliceblue;
    border-radius: 5px;
    margin-bottom: 2rem;
}
.login-form button {
    width: 40%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}
</style>