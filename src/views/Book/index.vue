<template>
	<div>
		<van-tabs color="#1989fa" sticky>
			<van-tab v-for="cate in categories" :title="cate.name" :key="cate.name">内容 {{ cate }}</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [
				{
					name: '全部',
					params: ''
				},
				{
					name: '后端',
					params: ''
				},
				{
					name: '前端',
					params: ''
				},
				{
					name: 'Android',
					params: ''
				},
				{
					name: 'IOS',
					params: ''
				},
				{
					name: '开发工具',
					params: ''
				},
				{
					name: '代码人生',
					icon: ''
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped></style>
