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
        store.moviesList = res.data.results
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
  <MainApp/>
</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $primary;
}

</style>
