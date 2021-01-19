/**
 * 独立 封装get post 方法
 *   
 */

import instance from './http'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        instance.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


//==========================================api统一管理
// api模块写法 隐藏地址 只负责传入参数
// import { get, post } from './request'
// export const apiAddress = params => post('api/v1/users/my_address/address_save', params); 
//==========================================在页面使用
// import { apiAddress } from '@/request/api';// 导入我们的api接口
// apiAddress({                    
//     type: 0,                    
//     sort: 1                
// }).then(res => { // 获取数据成功后的其他操作})    