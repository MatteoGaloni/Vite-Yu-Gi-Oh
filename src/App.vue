<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import axios from 'axios';
import { store } from './data/store'

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store: store

    }
  },
  methods: {},

  mounted() {

    console.log("Deve stampare prova", this.store.prova)
    axios.get(this.store.urlAlien).then(result => {
      console.log(result);
      this.store.gameCards = result.data.data;
      console.log("il risultato è", this.store.gameCards);
      this.store.loading = true

    }).catch(error => {
      console.error("ERRORE", error);
      this.store.gameCards = [];
    });

  }
}
</script>

<template>
  <AppHeader />

  <AppMain />
</template>

<style scoped lang="scss"></style>
