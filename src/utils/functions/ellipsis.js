/**
 *超出规定长度省略号
 *
 * @export
 * @param {*} text 
 * @param {*} length
 * @return {*} 
 * @author 陈仕佩
 */
export default function (text, length) {
	return text.length > length ? text.slice(0, length) + '...' : text
}