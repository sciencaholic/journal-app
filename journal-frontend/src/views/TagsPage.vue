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
		isMobileView: Boolean
	},
	data() {
		return {
			isBusy: false,
			tagsList: [],
			tagEntries: [],
			currentTag: null
		}
	},
	created() {
		this.isBusy = true;
		this.refreshTagEntries();
		this.isBusy = false;
	},
	methods: {
		async refreshTagEntries() {
			let resp = await api.getTags(this.currentTag || '');
			if (resp && resp.status == "success") {
				console.log(resp);
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
			if (tag == this.currentTag) return;
			this.currentTag = tag;
			this.refreshTagEntries();
		}
	}
}
</script>

<style scoped>

</style>