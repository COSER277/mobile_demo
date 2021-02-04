import {instance,base} from '../axios.config.js'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

/**
 * 接口域名的管理
 * 考虑到接口会有多个不同域名的情况，通过js变量来控制接口域名
 */

const user = {
    // post提交    
    login(params) {
        return instance.post(`${base.dev}/login`, QS.stringify(params));
    }
}

export default user;