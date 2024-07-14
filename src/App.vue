<script>
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'

// import store managment 
import { store } from './store.js';
// import axios
import axios from 'axios';


export default {
  components: {
    HeaderApp,
    MainApp
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getTitle() {
      let endPoint = store.moviesURL;

      if (store.searchTitle !== '') {
        endPoint += `${store.searchTitle}`
      };
      axios.get(endPoint).then(res => {
        console.log(res.data.results);
        store.movieList = res.data.results
      });

      store.searchTitle = '';
    },
  },
  created() {
    this.getTitle();
  },
}
</script>

<template>
  <HeaderApp @selectTitle="getTitle" />
  <MainApp />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
