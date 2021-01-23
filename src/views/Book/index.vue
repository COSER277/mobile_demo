<template>
	<div>
		<van-tabs color="#1989fa">
			<van-tab v-for="cate in categories" :title="cate.name">内容 {{ cate }}</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories:[
				{
					name:"全部",
					icon:""
				},{
					name:"后端",
					icon:""
				},{
					name:"前端",
					icon:""
				},{
					name:"Android",
					icon:""
				},{
					name:"IOS",
					icon:""
				},
				{
					name:"开发工具",
					icon:""
				},
				{
					name:"代码人生",
					icon:""
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped></style>
