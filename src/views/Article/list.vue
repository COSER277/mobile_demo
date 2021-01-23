<template>
	<div>
		<search-bar :show="true"></search-bar>
		文章列表
	</div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
export default {
	components: {
		SearchBar
	}
}
</script>

<style lang="scss" scoped></style>
