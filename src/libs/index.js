import cordova from './cordova/index'
/**
 * 可独立暴露      可统一暴露
 * $cordova.xxxx   $libs.cordova.xxx
 */
//独立封装
// import Vue from 'vue'
// Vue.prototype.$cordova=cordova
export default {
    cordova
}

//挂载main.js 
//import '@/libs/index'