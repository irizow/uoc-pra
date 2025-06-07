<template>
    <div class="post-summary">
        <img :src="profileimg"/>
        <div>
            <strong>{{ fullName }}</strong>
            <span>{{ username }}</span>
        </div>
        <div>
            <p>{{ message }}</p>
            <span>{{ date }}</span>
            <div class="icon-box">
                <span>❤ {{ likes }}</span>
                <span>💬 {{ comments }}</span>
            </div>
        </div>
    </div>
</template>