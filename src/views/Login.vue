<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <p v-if="error" class="error">{{ error }}</p>
    <label for="username">Username: </label>
    <input v-model="username" type="text" id="username" name="username" required />
    <label for="password">Password: </label>
    <input v-model="password" type="password" id="password" name="password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { logIn } from '../api/auth.js'
import { useAuthStore } from '../store/session.js'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const authStore = useAuthStore()
const router = useRouter()

async function handleLogin() {
  try {
    const response = await logIn(username.value, password.value)
    authStore.setUser(response.user, response.token)
    router.push('/')
  } catch (err) {
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
  justify-content: flex-start;
  width: 100%;
  height: 90vh;
}
.login-form input {
  width: 80%;
  background-color: aliceblue;
  border-radius: 5px;
  margin-bottom: 2rem;
  max-height: 2.5rem;
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
