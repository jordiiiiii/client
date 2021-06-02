<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      fill="#DBE1EC"
      viewBox="0 0 48 48"
    >
      <path
        d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
      />
    </svg>

    <div class="subtitle">
      {{ message }}
    </div>

    <p v-if="statusCode === 404">
      <NuxtLink to="/"> Back to the home page </NuxtLink>
    </p>

    <h1 class="subtitle" v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>

    <h1 class="subtitle" v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Back to the home page </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 This page could not be found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.centerError {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
}
</style>
