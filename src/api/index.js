import Login from './modules/login'
import Vue from 'vue'
//挂载
Vue.prototype.$Api = {
    Login
}
//直接使用 import Api from '@/api/index'