<style src="./assets/custom.css" rel="stylesheet"></style>

<template>
  <div id="admin-app">
    <navbar></navbar>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Parent/Navbar';
import AppHeader from './components/AppHeader'

export default {
  components: {
    Navbar,
    AppHeader,
  },
};
</script>
