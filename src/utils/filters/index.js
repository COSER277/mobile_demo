/**
 *过滤时间格式
 * @param {*} params
 * @param {*} type
 * @return 
 * @example formTime(date) //一个参数默认返回值
 * @example formTime(date,"YYYY/MM/DD hh:mm")
 * @author 陈仕佩
 */
const formTime = function (params, type) {
	var Timer = new Date(params * 1000)
	var Y = Timer.getFullYear()
	var M = Timer.getMonth() + 1
	var D = Timer.getDate()
	var h = Timer.getHours()
	var m = Timer.getMinutes()
	M = M >= 10 ? M : '0' + M
	D = D >= 10 ? D : '0' + D
	h = h >= 10 ? h : '0' + h
	m = m >= 10 ? m : '0' + m
	if (type && type == 'YYYY') {
		return Y
	} else if (type && type == 'YYYY/MM') {
		return Y + '' + M
	} else if (type && type == 'YYYY/MM/DD') {
		return Y + '' + M + '-' + D
	} else {
		return Y + '' + M + '-' + D + ' ' + h + ':' + m
	}
}
export default { formTime }

// import filters from '@/utils/filters/index'
// Object.keys.forEach(key => {
// 	Vue.filter(key, filter[key])
// })