import {http,base} from '../axios.config.js'
/**
 * 接口域名的管理
 * 考虑到接口会有多个不同域名的情况，通过js变量来控制接口域名
 */
const base = {    
    product: 'https://xxxx111111.com/api/v1',    
    test: 'http://xxxxx22222.com/api'
}

const user = {
    // post提交    
    login(params) {
        return http.post(`${base.sq}/login`, qs.stringify(params));
    }
}

export default user;