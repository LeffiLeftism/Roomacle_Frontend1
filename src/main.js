//import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './plugins/bootstrap-vue'

import store from "./store";

import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dynamicDefaults: {
    height: 'auto',
    adaptive: true,
    //scrollable: true,
  }
})
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
