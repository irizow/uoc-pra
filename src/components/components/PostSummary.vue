<template>
  <div class="post-summary">
    <img :src="'https://xsgames.co/randomusers/avatar.php?g=male'" />
    <div>
      <strong>{{ fullName }}</strong>
      <span>{{ username }}</span>
    </div>
    <div>
      <p>{{ message }}</p>
      <span>{{ publishDate }}</span>
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
  publishDate: Date,
  likes: Number,
  comments: Number,
})
</script>

<style scoped>
.post-summary {
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 0.4rem;
  border-bottom: 1px solid grey;
  padding: 1rem;
}

.post-summary img {
  width: 3rem;
  border-radius: 100%;
}
.post-summary div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.post-summary div:nth-child(3) {
  grid-column: 1/3;
}
.post-summary .icon-box {
  margin-top: 0.4rem;
  flex-direction: row;
}
</style>
