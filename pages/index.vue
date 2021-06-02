<template>
  <div class="landingPage">
    <CustomHeroSlots>
      <template #title> Client </template>
      <template #subtitle> My Grail Nuxt.js Project </template>
      <template #links>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </template>
    </CustomHeroSlots>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
