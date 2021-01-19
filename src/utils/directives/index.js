/**
 * @description 输入框只允许输入数字
 * @useage v-number-only
 */
export const numberOnly = {
	bind(el, binding) {
		el.handler = function () {
			let v = el.value
			v = v.replace(/[^\d]/g, '')
			if (el.value.length > binding.value) {
				el.value = v.slice(0, binding.value)
			}
		}
		el.addEventListener('input', el.handler, false)
	},
	unbind(el) {
		el.removeEventListener('input', el.handler)
	}
}

export default {
    numberOnly
}

///import * as directives from '@/utils/directives/index'
// 注入全局指令
// Object.keys(directives).forEach(kry => {
// 	Vue.directive(kry, directives[kry])
// })