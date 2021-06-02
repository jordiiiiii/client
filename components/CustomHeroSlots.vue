<template>
  <div class="custom-hero-slot containerIndex">
    <div>
      <Logo />
      <h1 class="title"><slot name="title"></slot></h1>
      <h2 class="subtitle"><slot name="subtitle"></slot></h2>
      <div class="links"><slot name="links"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomHeroSlots',
}
</script>

<style scoped>
.custom-hero-slot {
  margin-bottom: 32px;
}
</style>
