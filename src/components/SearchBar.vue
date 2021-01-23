<template>
	<div class="SeachBar flexCenter">
		<div class="container flexCenter">
			<van-icon name="search" />
			<input type="text" placeholder="搜索" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'SeachBar',
	props: {
		show: Boolean
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.SeachBar {
	width: 100%;
	height: 3rem;
	background: #fff;
	.container {
		width: 100%;
		height: 80%;
		padding: 5px 10px;
		margin: 0 10px;
		background: rgb(247, 248, 250);
		border-radius: 12px;
	}
	input {
		width: 100%;
		height: 100%;
		border: none;
		font-size: 12px;
		background: transparent;
		&::placeholder {
			color: #ccc;
		}
	}
}
.flexCenter {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
