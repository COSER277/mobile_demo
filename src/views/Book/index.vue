<template>
	<div class="content">
		<van-tabs color="#1989fa" sticky @click="change">
			<van-tab v-for="cate in categories" :title="cate.name" :key="cate.name">
				<div class="tags">
					<div class="tag" v-show="cate.tags">
						<van-button
							class="tag_button"
							:class="{ actived: tag.name == tagName }"
							@click="select(tag)"
							size="small"
							hairline
							v-for="(tag) in cate.tags"
							:key="tag.name"
						>
							{{ tag.name }}
						</van-button>
					</div>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tagName: '全部',
			categories: [
				{
					name: '推荐',
					params: '',
					tags: [
						{
							name: '全部'
						},
						{
							name: '日榜'
						},
						{
							name: '月榜'
						},
						{
							name: '年榜'
						}
					]
				},
				{
					name: '后端',
					params: '',
					tags: [
						{
							name: '全部'
						},
						{
							name: 'Java'
						},
						{
							name: 'C#'
						}
					]
				},
				{
					name: '前端',
					params: '',
					tags: [
						{
							name: '全部'
						},
						{
							name: 'Javascript'
						},
						{
							name: 'Vue.js'
						}
					]
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
	},
	methods: {
		change(name, title) {
			console.log(name, title)
			// this.$router.currentRoute=title
			this.tagName="全部"
		},
		select(tag) {
			this.tagName = tag.name
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variable.scss';
.content {
	width: 100%;
	.tags {
		width: 100%;
		// height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
		background: $white;
		.tag {
			padding: 5px;
			// background: #ccc
			background: rgb(255, 255, 255);
			.tag_button {
				padding: 8px;
				margin: 0 2px;
				font-size: 14px;
				// letter-spacing:5px;
				text-align: center;
				background: rgb(244, 245, 245);
				color: #ccc;
				border: none;
				border-color: transparent;
				border-radius: 12px;
				&:active {
					border: none;
					background-color: transparent;
					outline: none; //消除默认点击蓝色边框效果
				}
				&.actived {
					background: rgb(0, 127, 255);
					color: $white;
					outline: none;
				}
			}
		}
	}
}
</style>
