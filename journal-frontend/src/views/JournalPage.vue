<template>
  <div class="parent-box">
		<calendar-modal @journal-date-change="refreshEntries"></calendar-modal>
		<Entry 
			:show="isBusy"
			@toggle-highlight="toggleHighlight" 
			@delete-entry="deleteEntry"
			:entries="entries" 
			:isHLEnabled="true"
		></Entry>
		<new-entry @add-entry="addEntry" />
  </div>
</template>

<script>
import moment from 'moment'
import api from '../modules/api'
import shared from '../shared.js'
import Entry from '../components/Entry.vue'
import NewEntry from '../components/NewEntry.vue'
import CalendarModal from "../components/CalendarModal.vue";

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
				shared.toast(shared.errorTexts.SERVER_ERROR);
			}
			this.isBusy = false;
		},
		async toggleHighlight(id) {
			this.entries = this.entries.map(e => e._id === id ? {...e, highlight:!e.highlight} : e);

			let resp = await api.toggleHighlight(id, {"highlight": this.entries.find(e => e._id === id).highlight});
			if (resp && resp.status == "success") return;
			else {
				shared.toast(shared.errorTexts.SERVER_ERROR);
			}
		},
    async addEntry(entry) {
			let resp = await api.createEntry({"entry":entry});
			if (resp && resp.status == "success") {
				this.entries = [...this.entries, entry];
				shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
			}
			else {
				shared.toast(shared.errorTexts.SERVER_ERROR);
			}
			shared.getDisplayDateOrTime(this.entries, "time", "hh:mm");
    },
		async deleteEntry(id) {
			this.entries = this.entries.filter(e => e._id !== id);
			let resp = await api.deleteEntry(id);
			if (resp && resp.status == "success") return;
			else {
				shared.toast(shared.errorTexts.SERVER_ERROR);
			}
		}
	}
}
</script>

<style scoped>
</style>