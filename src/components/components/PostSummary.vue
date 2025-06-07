<template>
    <div class="post-summary">
        <img :src="profileImg"/>
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

<script setup>
defineProps({
    profileImg: String,
  fullName: String,
  username: String,
  message: String,
  date: Date,
  likes: Number,
  comments: Number,
})
</script>