<template>
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="show"
      >
        <v-card>
            <v-toolbar
              color="primary"
              dark
            >Курсовая Работа</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Рыбка Никита, ПИ20-Г</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click.stop="show = false"
              >Закрыть</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
</template>

<script>
export default {
  props: ['visible'],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if(!value) {
          this.$emit('close');
        }
      }
    }
  }
}
</script>

<style>

</style>
