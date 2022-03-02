<template>
  <div class="parent-box" :class="{'sidenav-padded my-2':!isMobileView}">
		<div class="child-box-head"><h3 class="head-title">Tags</h3></div>
		<tags-list 
			:show="isBusy" 
			:tagsList="tagsList"
			:currentTag="currentTag"
			@select-tag="onTagSelect"
		/>
		<Entry 
			:show="isBusy"
			:entries="tagEntries" 
			:isHLEnabled="false"
		></Entry>
		<div class="child-box-foot"></div>
  </div>
</template>

<script>
import shared from '../shared.js'
import api from '../modules/api'
import Entry from '../components/Entry.vue'
import TagsList from '../components/TagsList.vue'

export default {
  name: 'TagsPage',
  components: {
		Entry,
		TagsList
  },
	props: {
		isMobileView: Boolean,
		tag: String
	},
	data() {
		return {
			isBusy: false,
			tagsList: [],
			tagEntries: [],
			currentTag: null
		}
	},
	watch: { 
		tag: function(n, o) {
			console.log('Prop changed: ', n, ' | was: ', o);
			this.refreshPage();
		}
	},
	created() {
		this.refreshPage();
	},
	methods: {
		refreshPage() {
			this.isBusy = true;
			this.currentTag = (this.tag) ? this.tag : '';
			this.refreshTagEntries(this.currentTag);
			this.isBusy = false;
		},
		async refreshTagEntries(tag) {
			let resp = await api.getTags(tag); // this.tag || this.currentTag || ''
			if (resp && resp.status == "success") {
				// console.log(resp);
				// below is needed to select chip in TagsList
				this.currentTag = (resp.currentTag) ? resp.currentTag : null;
				this.tagsList = (resp.tagsList) ? resp.tagsList : null;
				this.tagEntries = (resp.data) ? resp.data : null 
				// console.log(this.tagEntries);
				shared.getDisplayDateOrTime(this.tagEntries, "display_date", "MMM DD");
				shared.getDisplayDateOrTime(this.tagEntries, "time", "hh:mm");
			}
			else {
				shared.toast(shared.errorTexts.SERVER_ERROR);
			}
		},
		onTagSelect(tag) {
			// below is needed so we don't refresh page unnecessarily on same tag click
			if (tag == this.tag) return;
			this.currentTag = tag;
			this.refreshTagEntries(tag);
		}
	}
}
</script>

<style scoped>

</style>