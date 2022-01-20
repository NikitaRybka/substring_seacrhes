<template>
  <div>
    <h3>Результаты</h3>
    <div class="results" id="results">{{ correctAnswers }} / 5</div>
    <v-btn
      color="primary"
      large
      @click="$emit('restart')"
    >Начать сначала</v-btn>
  </div>
</template>

<script>
import store from './store';

export default {
  computed: {
    correctAnswers: {
      get() {
        return store.correctAnswers;
      }
    }
  },
  mounted() {
    let resultsContainer = document.getElementById('results');
    if(this.correctAnswers < 3) {
      resultsContainer.style.color = 'red';
    } else {
      resultsContainer.style.color = 'green';
    }
  },
}
</script>

<style lang="scss" scoped>
  .results {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    font-size: 32px;
  }
</style>
