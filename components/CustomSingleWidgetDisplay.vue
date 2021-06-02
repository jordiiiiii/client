<template>
  <div class="singleWidgetDisplay">
    <h4 class="title">{{ solutionHeader.title }}</h4>
    <p class="subtitle">
      {{ solutionHeader.snippet }}
    </p>
    <div class="singleWidget-container">
      <CustomSingleWidget
        v-for="(solution, index) in solutions"
        :key="index"
        :solution="solution"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CustomSingleWidgetDisplay',

  computed: {
    ...mapState({
      solutionHeader: (state) => state.product.solutionTitle,
      solutions: (state) => state.product.solutionWidgets,
    }),
  },
}
</script>

<style scoped>
.title {
  font-size: 3rem;
}
.subtitle {
  font-size: 2rem;
  margin-bottom: 32px;
}
.singleWidget-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
