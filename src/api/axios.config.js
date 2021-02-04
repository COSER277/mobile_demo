/**
 * axios 封装
 * 请求拦截 响应拦截 以及错误处理
 */
import axios from 'axios'
import router from '@/router/index'
import store from '@/store/index'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import Toast from 'vant' //具体使用toast 自行替换

/**
 * 跳转登录
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}
/**
 * 提示
 * @param {*} msg 
 */
const tip = (msg) => {
    Toast({
        message: msg,
        duration: 1000, //显示时间
        forbidClick: true //阻止点击
    })
}

const errorHandle = (status, other) => {
    switch (status) {
        case 401:
            //登录
            //跳转登录页面
            setTimeout(() => {
                toLogin()
            }, 1000)
            break;
        case 402:
            //返回后端返回数据
            tip("操作失败，请重试")
            break;
        case 403:
            tip("登录令牌过期，请重新登录")
            // 清理 sessionStorage localStorge

            //设置 Vuex对应的标记

            //跳转登录页面
            setTimeout(() => {
                toLogin()
            }, 1000)
        case 404:
            tip("请求资源不存在")
            break;
        case 422:
            //数据请求操作错误
            break;
        default:
            console.log(other)
    }
}

//创建 axios 实例
//设置超时10秒
var instance = axios.create({
    timeout: 10000,
})
// 设置post请求头
// instance.default.headers.post(['Content-Type']) = 'application/x-www-form-urlencoded';

/**
 * 请求拦截器
 * 请求前 带上token
 */
instance.interceptors.request.use(
    config => {
        // Do something before request is sent
        //带上请求头
        // const token=store.state.token
        const token = sessionStorage.getItem("token")
        // 条件通道
        token && (config.headers.Authorization = token)
        return config;
    }, error => {
        // Do something with request error
        return Promise.reject(error);
    }
);
/**
 * 响应拦截器
 * 响应后 处理信息
 */
instance.interceptors.response.use(
    response => {
        // Do something before response is sent
        response.status === 200 ? Promise.resolve(response) : Promise.resolve(responses)
        return response;
    }, error => {
        if (error) {
            //请求已发出 但不2xx范围内
            errorHandle(error.status, error.data.message)
            return Promise.reject(error);
        } else {
            //处理断网
            // 请求断网时 更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            if (!window.navigator.onLine) {
                store.commit('change', {
                    name: "network",
                    value: false
                });
            } else {
                return Promise.reject(error);
            }
        }
    }
);


const base = {
	product: 'https://xxxx111111.com/api/v1',
    test: 'http://xxxxx22222.com/api',
    dev:"http://10.107.56.49:3000"
}
// 暴露实例对象
export {instance,base};
