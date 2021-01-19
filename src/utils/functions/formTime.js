
/**
 * 格式化时间
 * @param {*} params  时间戳
 * @param {*} type  格式 YYYY YYYY/MM YYYYY/MM/DD 
 * @default null 
 * @author 陈仕佩
 */
export default function (params, type) {
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