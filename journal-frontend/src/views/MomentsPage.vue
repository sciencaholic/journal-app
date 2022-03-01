<template>
  <div class="parent-box" :class="{'sidenav-padded my-2':!isMobileView}">
		<div class="child-box-head"><h3 class="head-title">Moments</h3></div>
		<Entry 
			:show="isBusy"
			:entries="moments" 
			:isHLEnabled="false"
		></Entry>
		<div class="child-box-foot"></div>
  </div>
</template>

<script>
import shared from '../shared.js'
import api from '../modules/api'
import Entry from '../components/Entry.vue'

export default {
  name: 'MomentsPage',
  components: {
		Entry
  },
	props: {
		isMobileView: Boolean
	},
	data() {
		return {
			isBusy: false,
			moments: []
		}
	},
	created() {
		this.isBusy = true;
		this.refreshMoments();
		this.isBusy = false;
	},
	methods: {
		async refreshMoments() {
			let resp = await api.getMoments();
			if (resp && resp.status == "success") {
				this.moments = (resp && resp.data) ? resp.data : null 
				// console.log(this.moments);
				shared.getDisplayDateOrTime(this.moments, "display_date", "MMM DD");
				shared.getDisplayDateOrTime(this.moments, "time", "hh:mm");
			}
			else {
				shared.toast(shared.errorTexts.SERVER_ERROR);
			}
		}
	}
}
</script>

<style scoped>

</style>