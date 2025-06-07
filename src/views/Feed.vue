<template>
  <section v-if="posts.length" class="feed">
    <h2>Feed</h2>
    <PostSummary v-for="post in posts"
    :key="post.id"
    :profileImg="post.user.profileImg"
    :fullName="`${post.user.name} ${post.user.surname}`"
    :username="post.user.username"
    :message="post.content"
    :likes="post.nLikes"
    :comments="post.nReplies"
     />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllPosts } from '../api/posts.js'
import PostSummary from '../components/components/PostSummary.vue'
const posts = ref([])

onMounted(async () => {
const response = await getAllPosts(10, 0)
  posts.value = response.result
    console.log('posts', Object.entries(posts.value[0]))
  console.log('posts', Object.entries(Object.values(posts.value[3])[6]))
})
</script>

<style scoped>
.feed {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  z-index: 0;
}
.feed h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
  align-self: flex-start;
}
</style>
