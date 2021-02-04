import User from './modules/user'
import Article from './modules/article'

import Vue from 'vue'
//挂载
Vue.prototype.$Api = {
    User,Article
}
//直接使用 import Api from '@/api/index'