<template>
  <nav class="nav-bar">
    <router-link to="/" :class="{ active: route.path === '/' }"> 🏠︎ </router-link>
    <router-link to="/login" :class="{ active: route.path === '/login' }"
      ><img v-if="user" :src="user.profileImg" /><span v-else>🗣</span></router-link
    >
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '../../store/session.js'
const authStore = useAuthStore()
const user = computed(() => authStore.user)
const route = useRoute()
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 8vh;
  justify-content: center;
  width: 100%;
  box-shadow:
    -1px -1px 5px rgba(0, 0, 0, 0.1),
    1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 20px 20px;
}
.nav-bar a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  font-size: 2rem;
  cursor: pointer;
  color: gray;
  transition: color 200ms ease-in-out;
}

.nav-bar a:hover {
  color: rgba(101, 101, 255, 0.655);
}

.nav-bar a.active {
  color: rgb(101, 101, 255);
}

.nav-bar a > img {
  border-radius: 100%;
  width: 35px;
}
</style>
