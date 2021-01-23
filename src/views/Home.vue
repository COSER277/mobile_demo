<template>
	<div class="home">
		<router-view />
		<van-tabbar v-model="active" @change="onChange" route>
			<van-tabbar-item icon="home-o" replace name="home" to="/article">Home</van-tabbar-item>
			<van-tabbar-item icon="label-o" replace name="search" to="/book">Book</van-tabbar-item>
			<van-tabbar-item icon="user-o" replace name="user" to="/user">User</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
	data() {
		return {
			active: 'home'
		}
	},
	methods: {
		onChange(index) {}
	}
}
</script>
