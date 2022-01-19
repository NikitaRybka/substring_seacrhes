<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
        @click.stop="showAboutMeModal"
      >
        Обо мне
      </v-btn>
      
      <router-link to="/theory">
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
        >
          Теория
        </v-btn>
      </router-link>

      <router-link to="/sandbox">
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
        >
          Песочница
        </v-btn>
      </router-link>

      <router-link to="/test">
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
        >
          Тест
        </v-btn>
      </router-link>  
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>DonNTU</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import store from '../pages/store';

export default {
  methods: {
    showAboutMeModal() {
      store.showAboutMeModal = !store.showAboutMeModal;
    }
  }
}
</script>
