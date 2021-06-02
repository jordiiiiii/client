<template>
  <div class="singleWidget">
    <img
      class="svg-icon"
      :src="require(`@/assets/svg/${solution.image}`)"
      alt=""
    />
    <h3 class="title">{{ solution.title }}</h3>
    <p class="snippet">
      {{ solution.snippet }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CustomSingleWidget',
  props: ['solution'],
}
</script>

<style scoped>
.singleWidget {
  text-align: center;
  min-width: 200px;
  max-width: 200px;
  min-height: 300px;
  max-height: 300px;
}
.title {
  font-size: 2rem;
  margin-bottom: 16px;
}
.svg-icon {
  height: 64px;
}
</style>
