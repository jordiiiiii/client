<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="(reviewer, index) of reviewers.results" :key="index">
          {{ reviewer.name.first }}
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
    {{ reviewers }}
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  data() {
    return {
      reviewers: [],
    }
  },
  async fetch() {
    this.reviewers = await fetch(
      'https:randomuser.me/api/?results=5'
    ).then((res) => res.json())
  },
}
</script>
