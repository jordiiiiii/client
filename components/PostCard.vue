<template>
  <NuxtLink :to="`/post/${post._id}`">
    <div class="shadow border">
      <span>{{ parsedDate }}</span>
      <h4 class="subtitle">
        {{ post.title }}
      </h4>
      <span>{{ post.body }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
  },
  computed: {
    parsedDate() {
      const postDate = new Date(this.post.createdAt)
      return postDate.toDateString()
    },
  },
}
</script>

<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.eyebrow {
  font-size: 20px;
}
.border {
  border: 1px dotted rgba(255, 255, 255, 0.1);
}
</style>
