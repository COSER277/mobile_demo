import wx from 'weixin-js-sdk'
import store from '@/store'
import router from '@/router'
/*
 * 微信登录
 *
 */
import {
    SET_OPENID,
    OPENID,
    SET_USERINFO,
    SET_TOKEN,
    USER_TOKEN
}
from "@/config/constant"

const WeChat = {
    appid: process.env.VUE_APP_WECHAT_APPID,
    //获取Code
    getCode() {

    },
    //使用openid登录微信

}