import Vue from 'vue/dist/vue.esm'
import App from './app.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Router from './router';
import Config from './services/Config';

Vue.config.productionTip = false;

Config.setConfig('ApiUrl',
  document.querySelector("meta[name='activity_bookings:api']")
          .getAttribute('content'));

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: "Can you say hello?"
    },
    components: { App, Router }
  })
})
