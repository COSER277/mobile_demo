import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


//重写 vue-router push 
//处理 "Navigating to current location (XXX) is not allowed"的问题"
const _Push = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return _Push.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  // { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }), //滚动行为
  routes
})

import {
  USER_TOKEN
} from "@/config/constant"
const whiteList = [
  "/login",
  "/wxlogin",
  "/404",
]
import store from '@/store/index'
import {
  _getToken
} from '@/utils/common.js'
//路由权限控制
const history = window.sessionStorage
history.clear()
history.setItem('/', 0)


router.beforeEach(async (to, from, next) => {
  const hasToken = _getToken(USER_TOKEN)
  //1 判断是否有token
  if (hasToken) {
    //清除当前记录To_Url
    localStorage.removeItem("To_Url")
    //获取用户信息 
    const hasUserInfo =
      store.getters.userInfo && store.getters.userInfo.userId
    //有用户信息且有userId 证明登录成功过了
    if (hasUserInfo) {
      next()
    } else {
      //验证
      try {
        //请求接口方法了，使用vuex dispatch的方法 间接请求接口验证
        await store.dispatch("user/getUserInfo")
        next()
      } catch (error) {
        localStorage.setItem("To_Url", to.fullPath)
        //清除
        await store.commit("user/logout")
        //
        if (Storage.getters.device == "weChat") {
          //微信
          next({
            path: `/wxlogin`,
            replace: true,
          })
        } else {
          //网页
          next({
            path: `/login?redirect=${to.path}`,
            replace: true,
          })
        }
      }
    }
    next()
  }
  //有 则
  else {
    //无
    //判断是否在白名单中
    // console.log(whiteList);
    const isWhite = whiteList.findIndex(item => {
      return to.path.includes(item)
    })
    if (isWhite) {
      //是 在白名单中 不需要登录
      next()
    } else {
      //否 不在 则需要跳转登录 记录当前url
      localStorage.setItem("To_Url", to.fullPath)
      if (Storage.getters.device == "weChat") {
        //微信
        next({
          path: `/login?redirect=${to.path}`,
          replace: true,
        })
      } else {
        //网页
        next({
          path: `/login?redirect=${to.path}`,
          replace: true,
        })
      }
    }
  }
})

export default router