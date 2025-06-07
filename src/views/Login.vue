<template>
    <form class="login-form" @submit.prevent="login">
        <label for="username">Username:
        </label>
                    <input type="text" id="username" name="username" required>
        <label for="password">Password:
        </label>
                   <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
    </form>
</template>

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