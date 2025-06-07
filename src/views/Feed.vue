<template>
  <section v-if="posts.length" class="feed">
    <h2>Feed</h2>
    <PostSummary
      v-for="post in posts"
      :key="post.id"
      :profileImg="post.user.profileImg"
      :fullName="`${post.user.name} ${post.user.surname}`"
      :publishDate="formatDate(post.publishDate)"
      :username="post.user.username"
      :message="post.content"
      :likes="post.nLikes"
      :comments="post.nReplies"
    />
    <button v-if="morePosts" @click="loadMorePosts">See More</button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllPosts } from '../api/posts.js'
import PostSummary from '../components/components/PostSummary.vue'
const posts = ref([])
const limit = 10
const offset = ref(0)
const morePosts = ref(true)

onMounted(() => {
  loadMorePosts()
})

async function loadMorePosts() {
  const response = await getAllPosts(limit, offset.value)
  if (response.result.length < limit) {
    morePosts.value = false
  }
  posts.value.push(...response.result)
  offset.value += limit
}

function formatDate(publishDate) {
  const date = new Date(publishDate)

  const formattedDate = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(
    2,
    '0',
  )}:${String(date.getMinutes()).padStart(2, '0')}`
  return formattedDate
}
</script>

<style scoped>
.feed {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  overflow-y: scroll;
}
.feed h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  align-self: flex-start;
}
.feed button {
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  padding: 0.4rem;
  width: 200px;
  margin-top: 1rem;
}
</style>
