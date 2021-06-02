<template>
  <div class="container">
    <TheHeader></TheHeader>
    <main>
      <Nuxt />
    </main>
    <TheFooter class="theFooter"></TheFooter>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Jordi GN/Grail CyberTech',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Grail CyberTech Enterprise Homepage, develops a fully automated, self learning penetration tests solution, while mimicking the hackers mindset. Grail CyberTech is effectively modeling the hackers thoughts',
        },
      ],
    }
  },
}
</script>
