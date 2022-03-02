<template>
  <component :is="{template:htmlStr}"></component>
</template>

<script>
import shared from '../shared'

export default {
  name: 'Hashtag',
	props: {
		text: String,
		tags: Array,
	},
  data () {
    return {
			isMobileView: false,
      htmlStr: `<p class="entry-c2">{{data}}</p>`
		}
  },
	created() {
		this.isMobileView = shared.handleView();
    this.htmlStr = this.htmlStr.replace("{{data}}", this.entryHtml(this.text))
	},
	methods: {
		entryHtml(text) {
			for (let i = 0; i < this.tags.length; i++) {
				text = text.replace('#'+this.tags[i], this.hashLink(this.tags[i]));
			}
			return text;
		},
		hashLink(s) {
      return `<router-link 
        class="base-color-green" 
        :to="{ name: 'TagItem', params: { tag: '${s}' }}"
      >
        #${s}
      </router-link>`
		}
	}
}
</script>

<style scoped>
</style>