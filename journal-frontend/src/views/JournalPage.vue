<template>
  <div class="parent-box">
		<!-- <calendar-dial /> -->		
		<calendar-modal @journal-date-change="refreshEntries"></calendar-modal>
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
import shared from '../shared.js'
import Entry from '../components/Entry.vue'
import NewEntry from '../components/NewEntry.vue'
import CalendarModal from "../components/CalendarModal.vue";

// import CalendarDial from './CalendarDial.vue'

export default {
  name: 'JournalPage',
	components: {
		Entry,
		NewEntry,
		CalendarModal
	},
	data() {
		return {
			isBusy: false,
			entries: [],
			default_date: moment().format()
		}
	},
	created() {
		this.refreshEntries(this.default_date);
	},
	methods: {
		async refreshEntries(date) {
			this.isBusy = true;
			let resp = await api.getJournalEntries(moment(date).format("DD-MM-YYYY"));
			if (resp && resp.status == "success") {
				this.entries = (resp && resp.data) ? resp.data : null 
				// console.log(this.entries);
				shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
			}
			else {
				// TODO: show toast error
			}
			this.isBusy = false;
		},
		async toggleHighlight(id) {
			this.entries = this.entries.map(e => e._id === id ? {...e, highlight:!e.highlight} : e);

			let resp = await api.toggleHighlight(id, {"highlight": this.entries.find(e => e._id === id).highlight});
			if (resp && resp.status == "success") return;
			else {
				// TODO: show toast error
			}
		},
    async addTask(entry) {
			let resp = await api.createEntry({"entry":entry});
			if (resp && resp.status == "success") {
				this.entries = [...this.entries, entry];
				shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
			}
			else {
				// TODO: show toast error
			}
			shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
    }
	}
}
</script>

<style scoped>
</style>