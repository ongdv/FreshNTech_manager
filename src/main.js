// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import bootstrap from 'bootstrap-vue';
import vuetify from 'vuetify';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import vuetify from 'vuetify';
// // index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//bootstrap-vue
Vue.use(bootstrap);
Vue.use(vuetify);

//Eventbus
var eventBus = new Vue();
Vue.prototype.$eventBus = eventBus; 

//Axios
Vue.prototype.$http = axios; 


Vue.config.productionTip = false 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
