<style src="./assets/custom.css" rel="stylesheet"></style>

<template>
  <div id="app">
    <user-navbar></user-navbar>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import UserNavbar from './components/UserNavbar';
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    UserNavbar,
    AppHeader,
  },
};
</script>
