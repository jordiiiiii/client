<template>
  <footer>
    <div class="col">
      <span
        ><img class="image" src="~/assets/svg/nuxt-ico.svg" alt="nuxt icon" />
      </span>
    </div>
    <div class="col">
      &copy; Copyright 2018-{{ new Date().getFullYear() }} www.grail.com
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
  font-weight: lighter;
  letter-spacing: 1px;
  height: 30px;
}
.col span {
  display: inline-block;
  width: 120px;
}
span:first-of-type {
  color: #526488;
}
span:nth-of-type(2) {
  color: var(--teal-light);
}
</style>
