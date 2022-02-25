<template>
	<p class="entry-c2 ml-1 mr-8" v-html="htmlEntry(text)"></p>
</template>

<script>
export default {
  name: 'HashtagHighlight',
	props: {
		text: String,
		tags: Array,
	},
  data () {
    return {
		}
  },
	methods: {
		htmlEntry(text) {
			for (let i = 0; i < this.tags.length; i++) {
				text = text.replace('#'+this.tags[i], this.hashLink(this.tags[i]));
			}
			return text;
		},
		hashLink(s) {
			return `<a href="/tags/${s}" class="base-color-green">#${s}</a>`
		}
	}
}
</script>

<style scoped>
</style>