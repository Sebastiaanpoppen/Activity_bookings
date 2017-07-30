// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';
import Config from './services/Config';

Vue.config.productionTip = false;

Config.setConfig('ApiUrl',
  document.querySelector("meta[name='activity_bookings:api']")
          .getAttribute('content'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, BootstrapVue },
});
