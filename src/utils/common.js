/****
 * 判断当前设备类型
 */
export function judgeDevice() {
    let userAgent = window.navigator.userAgent,
        appVersion = window.navigator.appVersion;
    if (userAgent.toLowerCase().includes('hydf')) {
        //app
        if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1) {
            // android
            return 'android'
        } else if (userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            // ios
            return 'ios'
        }
    } else {
        if (userAgent.toLowerCase().includes('micromessenger')) {
            //微信浏览器
            return 'weChat'
        } else {
            //其他浏览器
            return 'other'
        }
    }

}