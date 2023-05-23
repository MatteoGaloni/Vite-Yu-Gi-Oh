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
  methods: {

  },
  mounted() {
    console.log("Deve stampare prova", this.store.prova)
    axios.get(this.store.urlYu).then(risposta => {
      console.log(risposta);
      this.store.gameCards = risposta.data.data;
      // [0].card_images[0]
      console.log("il risultato è", this.store.gameCards);

    }).catch(errore => {
      console.error("ERRORE", errore);
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
