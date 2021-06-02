<template>
  <div>
    <CustomBtnProps
      :button-text="'I\'m a button'"
      :button-text-color="'red'"
      :show-icon-before="true"
      :show-icon-after="true"
    />
    <CustomBtnSlots>
      <template #icon-before>
        <i class="fas fa-user"></i>
      </template>
      <template #button-text> Completely different text </template>
      <template #icon-after>
        <i class="fas fa-cog"></i>
      </template>
    </CustomBtnSlots>
    <CustomHeroSlots>
      <template #title> Ninja Giveaway </template>
      <template #subtitle> Grab your ninja swag for half price </template>
      <template #links>
        <NuxtLink :to="{ name: 'contactUs' }" class="button--green">
          About Us
        </NuxtLink>
        <NuxtLink :to="{ name: 'contactUs' }" class="button--green">
          About Us
        </NuxtLink>
        <NuxtLink :to="{ name: 'contactUs' }" class="button--green">
          About Us
        </NuxtLink>
      </template>
    </CustomHeroSlots>
  </div>
</template>

<script>
export default {
  name: 'Prova',
}
</script>
