<template>
  <div class="company">
    <CustomHeroSlots>
      <template #title> Company </template>
      <template #links>
        <NuxtLink :to="{ name: 'post' }" class="button--grey"> Blog </NuxtLink>
      </template>
    </CustomHeroSlots>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Company',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Forging Your Cyber Resilience With Continuous Penetration Testing Our Story We believe that Penetration Testing (PT), as it stands today, is obsolete. Software and algorithms can do a better job at penetration testing and help businesses continually assess and improve their cyber risks using the threat-oriented approach.',
        },
      ],
    }
  },
}
</script>
