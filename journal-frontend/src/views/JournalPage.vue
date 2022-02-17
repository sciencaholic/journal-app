<template>
  <div class="parent-box">
		<!-- <calendar-dial /> -->
    <h3 class="head-title">{{date}}</h3>
		<Entry 
			:show="isBusy"
			@toggle-highlight="toggleHighlight" 
			:entries="entries" 
			:isHLEnabled="true"
		></Entry>
		<new-entry @add-task="addTask" />
  </div>
</template>

<script>
import api from '../modules/api'
import shared from '../shared.js'
import Entry from '../components/Entry.vue'
import NewEntry from '../components/NewEntry.vue'

// import CalendarDial from './CalendarDial.vue'

export default {
  name: 'JournalPage',
	components: {
		Entry,
		NewEntry
	},
	data() {
		return {
			isBusy: false,
			date: "January 22, 2022",
			entries: []
		}
	},
	created() {
		this.isBusy = true;
		this.refreshEntries();
		this.isBusy = false;
	},
	methods: {
		async refreshEntries() {
			let resp = await api.getJournalEntries();
			if (resp && resp.status == "success") {
				this.entries = (resp && resp.data) ? resp.data : null 
				// console.log(this.entries);
				shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
			}
			else {
				// TODO: show toast error
			}
		},
		async toggleHighlight(id) {
			this.entries = this.entries.map(e => e._id === id ? {...e, highlight:!e.highlight} : e);

			let data = {};
			data.highlight = this.entries.find(e => e._id === id).highlight;
			// TODO: POST REQUEST CORS ERROR ON SENDING OBJECT
			// let resp = await api.toggleHighlight(id, data);
			// if (resp && resp.status == "success") return;
			// else {
			// 	// TODO: show toast error
			// }
		},
    addTask(entry) {
      this.entries = [...this.entries, entry];
			shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
    }
	}
}
</script>

<style scoped>
</style>