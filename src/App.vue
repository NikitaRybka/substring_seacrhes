<template>
  <v-app>
    <c-header/>

    <v-main>
      <router-view/>
    </v-main>

    <c-footer/>
    <about-me :visible="showAboutMeModal" @close="showAboutMeModal=false"/>
  </v-app>
</template>

<script>
import cHeader from './components/header.vue'
import cFooter from './components/footer.vue'
import AboutMe from './pages/about-me'

import store from './pages/store'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    cHeader,
    cFooter,
    AboutMe
  },

  computed: {
    showAboutMeModal: {
      get() {
        return store.showAboutMeModal;
      },

      set(value) {
        store.showAboutMeModal = value;
      }
    }
  }
};
</script>

<style lang="scss">
  a { text-decoration: none;}
  h1 { margin: 20px; }
</style>
