<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Введи строку"
        required
        id="string"
      ></v-text-field>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Введи подстроку"
        required
        id="substring"
      ></v-text-field> 
      <v-btn
        color="primary"
        elevation="2"
        @click="startAlgorithm
        "
      >Запустить алгоритм</v-btn>
    </v-form>
  </div>
</template>

<script>
  import store from './store'

export default {
  
  methods: {
    startAlgorithm() {
      store.string = document.getElementById('string').value;
      store.substring = document.getElementById('substring').value;

      store.step = 'run_algorithm';   
    }
  },


}
</script>
