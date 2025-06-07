<template>
    <nav class="nav-bar">
<div>
🏠︎
</div>
<div>🗣</div>
</nav>
</template>
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
.nav-bar div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-size: 2rem;
    cursor: pointer;
}
</style>