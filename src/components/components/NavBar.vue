<template>
    <nav class="nav-bar">
<router-link to='/' :class="{ active: route.path === '/' }">
🏠︎
</router-link>
<router-link to="/login" :class="{active: route.path === '/login'}">🗣</router-link>
</nav>
</template>
<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
</script>
<style scoped>
.nav-bar {
    display: flex;
    height: 8vh;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
      box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.1), 1px 1px 5px rgba(0, 0, 0, 0.1);
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
    color: rgb(101, 101, 255)
}
</style>