<template>
  <div class="product">
    <CustomHeroSlots>
      <template #title> Product </template>
      <template #links>
        <NuxtLink :to="{ name: 'company' }" class="button--green">
          Company
        </NuxtLink>
      </template>
    </CustomHeroSlots>
    <CustomSingleWidgetDisplay />
  </div>
</template>

<script>
export default {
  name: 'product',
  head() {
    return {
      title: 'Product',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'No Agents, Continuous PT Build up your cyber resilience As networks, users, devices, and applications constantly change and expose vulnerabilities as a result, it is critical to pen-test frequently. Grail CyberTech assures you can validate your cyberSecurity posture daily to keep your guard up at all times.',
        },
      ],
    }
  },
}
</script>
