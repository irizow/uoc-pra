<script setup>
import navBar from './components/components/NavBar.vue'
import Header from './components/components/Header.vue'
</script>

<template>
  <main class="main">
    <Header />
    <router-view />
    <navBar />
  </main>
</template>

<style scoped></style>
