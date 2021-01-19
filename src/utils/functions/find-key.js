/*
targetvalue 目标值
key 目标key
sources 源数据
rebackKey 返回的key
@example
let value=("1","No",[{No:"1",Name:"Test"}],"Name")
console.log(value) //Test
@author 陈仕佩
*/
const key = function (targetvalue, key, sources, rebackKey) {
	let item = sources.find((item, index) => {
		return item[key] === targetvalue
	})
	if (item) {
		return item[rebackKey]
	} else {
		return null
	}
}