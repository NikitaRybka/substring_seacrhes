<template>
  <div>
    <start v-if="step==='start'"/>
    <run-algorithm v-if="step==='run_algorithm'"/>
  </div> 
</template>

<script>
import store from './store'

import Start from './start.vue'
import RunAlgorithm from './run-algorithm.vue';

export default {
  components: {
    Start,
    RunAlgorithm
  },

  computed: {
    step: {
      get() {
        return store.step;
      }
    }
  }
}
</script>
