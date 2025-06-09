<template>
  <div class="user-info">
    <img :src="user.profileImg" alt="user avatar" />
    <h3>{{ user.name + ' ' + user.surname }}</h3>
    <span>@{{ user.username }}</span>
    <p>{{ user.bio }}</p>
    <span>Joined on {{ formatMonthYear(user.registrationDate) }}</span>
  </div>
  <PostSummary
    v-if="posts.length"
    :v-for="post in posts"
    :key="post.id"
    :profileImg="post.user.profileImg"
    :fullName="`${post.user.name} ${post.user.surname}`"
    :publishDate="formatDate(post.publishDate)"
    :username="post.user.username"
    :message="post.content"
    :likes="post.nLikes"
    :comments="post.nReplies"
  />
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getUserByUsername } from '../api/user.js'
import { getPostsByUsername } from '../api/posts.js'
import PostSummary from '../components/components/PostSummary.vue'

const user = ref('')
const posts = ref([])
const limit = 10
const offset = ref(0)
const route = useRoute()
const username = ref(route.query.username)
const morePosts = ref(false)

watch(
  () => route.query.username,
  (newUsername) => {
    username.value = newUsername
  },
)

onMounted(() => {
  getUserProfile()
  loadMorePosts()
})

async function getUserProfile() {
  try {
    const response = await getUserByUsername(username.value)
    user.value = response
  } catch (error) {
    console.log(error)
  }
}

async function loadMorePosts() {
  const response = await getPostsByUsername(username.value, limit, offset)
  if (response.result.length < limit) {
    morePosts.value = false
  }
  posts.value.push(...response.result)
  offset.value += limit
}

function formatMonthYear(regDate) {
  const date = new Date(regDate)
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
}
</script>
