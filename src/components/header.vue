<template>
  <div>
      <v-app-bar
        color="primary lighten-1"
        dark
        prominent
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Substring Searches</v-toolbar-title>

        <v-spacer></v-spacer>

      </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click.stop="showAboutMeModal">
            <v-list-item-title>Обо мне</v-list-item-title>
          </v-list-item>

          <router-link to="/theory">
            <v-list-item>
              <v-list-item-title>Теория</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/test">
            <v-list-item>
              <v-list-item-title>Тест</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/sandbox">
            <v-list-item>
              <v-list-item-title>Пеочница</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>  
</template>

<script>
  import store from '../pages/store';

  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods: {
      showAboutMeModal() {
        store.showAboutMeModal = !store.showAboutMeModal;
      }
    }
  }
</script>
