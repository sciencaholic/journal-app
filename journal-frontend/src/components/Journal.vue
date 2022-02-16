<template>
	<div class="journal ml-2">
		<h3 class="head-date">{{date}}</h3>
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
import moment from 'moment'
import api from '../modules/api'
import Entry from './Entry.vue'
import NewEntry from './NewEntry.vue'

export default {
	name: 'Journal',
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
				this.getTimeForDisplay(this.entries);
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
			this.getTimeForDisplay();
    },
		getTimeForDisplay(entries) { // TODO: optimize ?
			for (let i = 0; i < entries.length; i++) {
				entries[i].time = moment(entries[i].date).format("hh:mm");
			}
		}
	}
}
</script>

<style scoped>
.head-date {
	color: white;
	font-size: 3rem;
	margin: 1.2rem;
	font-family: 'Montserrat', sans-serif;
}

</style>