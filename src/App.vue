<script setup>
import navBar from './components/components/NavBar.vue'
import AppHeader from './components/components/AppHeader.vue'
</script>

<template>
  <main class="main">
    <AppHeader />
    <router-view />
    <navBar />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: var(--height);
}
</style>
