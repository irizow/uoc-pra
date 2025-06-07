<template>
  <div class="header">
    <h2>🥏 KwikPost</h2>
    <div v-if="user">✎</div>
  </div>
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
.header {
  display: grid;
  place-items: center;
  box-shadow:
    1px 1px 5px rgba(0, 0, 0, 0.1),
    -1px -1px 5px rgba(0, 0, 0, 0.1);

  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  border-radius: 20px 20px 0px 0px;
}

.header > div {
  background-color: rgb(148, 148, 148);
  filter: invert(100%);
  height: 1.5rem;
  width: 1.5rem;
  display: grid;
  place-items: center;
  border-radius: 100%;
  position: absolute;
  right: 1rem;
}
</style>
