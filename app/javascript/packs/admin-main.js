import Vue from 'vue'
import AdminApp from './AdminApp.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Config from './services/Config';
import router from './router';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

// Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#admin-app',
    router,
    data: {
      message: "Can you say hello?"
    },
    components: { AdminApp }
  })
})
