import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import I18n from './i18n'
import router from './router'
import store from './store'
import './api/index'
import './config/vant-config' //vant UI库配置
Vue.config.productionTip = false

import './assets/styles/_global.scss' //全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 