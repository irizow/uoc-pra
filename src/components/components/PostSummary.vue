<template>
  <div class="post-summary">
    <div>
      <router-link :to="{ path: '/user', query: { username: username } }">
        <img :src="profileImg" />
        <div class="post-user-data">
          <strong>{{ fullName }}</strong>
          <span>@{{ username }}</span>
        </div>
      </router-link>
    </div>
    <div class="post-info">
      <p>{{ message }}</p>
      <span>{{ publishDate }}</span>
      <div class="icon-box">
        <p>❤ {{ likes }}</p>
        <p>💬 {{ comments }}</p>
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
  publishDate: String,
  likes: Number,
  comments: Number,
})
</script>

<style scoped>
.post-summary {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4rem;
  border-bottom: 1px solid grey;
  padding: 1rem;
}

.post-summary div {
  display: flex;
  gap: 0.2rem;
}

.post-summary span {
  color: grey;
  font-size: 0.9rem;
}

.post-summary img {
  width: 3rem;
  border-radius: 100%;
}

.post-summary .post-info,
.post-user-data {
  flex-direction: column;
  gap: 0.2rem;
}

.icon-box {
  gap: 1rem;
  flex-direction: row;
}
</style>
