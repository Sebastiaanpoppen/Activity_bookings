<style src="./assets/custom.css" rel="stylesheet"></style>


<template>
  <div id="parent-app">
    <navbar></navbar>
    <app-header></app-header>
    <router-view></router-view>
    <h1>This is the parent</h1>
  </div>
</template>

<script>
import UserNavbar from './components/Admin/Navbar';
import AppHeader from './components/AppHeader'

export default {
  components: {
    Navbar,
    AppHeader,
  },
};
</script>
