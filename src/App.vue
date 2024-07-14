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
  }
}
</script>

<template>
  <HeaderApp />
  <MainApp />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
