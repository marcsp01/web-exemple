<script setup>
import { useRoute } from 'vue-router';
import MainHeader from './components/includes/MainHeader.vue';
import MainFooter from './components/includes/MainFooter.vue';

const route = useRoute();
</script>

<template>
  <template v-if="route.path !== '/cookies'">
    <MainHeader />


    <home />
    <cuina></cuina>
    <menu2></menu2>
    <empreses></empreses>
    <MainFooter />

  </template>

  <template v-else>
    <router-view />
  </template>
</template>

<script>
import MainHeader from './components/includes/MainHeader.vue';
import home from '/src/views/home.vue';
import cuina from '/src/views/cuina.vue';
import menu2 from '/src/views/menu.vue';
import empreses from '/src/views/empreses.vue';
import MainFooter from './components/includes/MainFooter.vue';




export default {
  name: 'App',
  components: {
    MainHeader,
    home,
    cuina,
    menu2,
    empreses,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  color: #2c3e50;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}
</style>
