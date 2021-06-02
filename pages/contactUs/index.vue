<template>
  <div class="contactUs">
    <CustomHeroSlots>
      <template #title> Contact Us </template>
      <template #links>
        <NuxtLink to="/" class="button--green"> About Us </NuxtLink>
      </template>
    </CustomHeroSlots>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Contact us For general inquiries please complete the form below and we will get back to you promptly. Our Offices Grail Ltd.Em Ha 44, Israel T: +444 44-444-4444   Grail Inc.444 Fifth Avenue, Suite B444New York, NY, 44444 United StatesT: 444-444-444',
        },
      ],
    }
  },
}
</script>
