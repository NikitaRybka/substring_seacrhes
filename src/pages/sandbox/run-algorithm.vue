<template>
  <div>
    <div id="container"></div>
    <v-btn
      text
      @click.stop="comeBack"
      color="primary"
    >Закрыть</v-btn>
  </div>
</template>

<script>
import store from "./store";
import { boyerMooreSearch } from "./boyer-moore";

export default {
  computed: {
    string: {
      get() {
        return store.string;
      },
    },
    substring: {
      get() {
        return store.substring;
      },
    },
    startIndex: {
      get() {
        return store.startIndex;
      },

      set(value) {
        store.startIndex = value;
      },
    },
  },

  mounted() {
    this.runAlgorithm();

    let container = document.getElementById("container");

    for (let i = 0; i < this.string.length; i++) {
      let item = document.createElement("div");
      item.style = "padding: 10px; border: 1px solid black;";
      item.innerText = this.string[i];
      if (i >= this.startIndex && i < this.startIndex + this.substring.length) {
        console.log(item.style)
        item.style.background = 'yellow';
      }

      container.appendChild(item);
    }
  },

  methods: {
    runAlgorithm() {
      this.startIndex = boyerMooreSearch(this.string, this.substring);
    },

    comeBack() {
      store.step = 'start';
      store.string = '';
      store.substring = '';
      store.startIndex = '';
    }
  },
};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
}

</style>
