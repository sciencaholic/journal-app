<template>
	<div class="entry">
		<p>{{text}}</p>
	</div>
</template>

<script>
export default {
	name: 'Entry',
	props: {
		text: String
	},
	data() {
		return {}
	}
}
</script>

<style scoped>
.entry {
	color: #ffffff;
	font-size: 0.5rem;
}
</style>