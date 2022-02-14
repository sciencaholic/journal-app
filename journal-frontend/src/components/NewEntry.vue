<template>
	<form class="entry" autocomplete="off" @submit="onSubmit">
		<highlight-btn 
			:isHighlighted="newEntry.highlight"
			@toggle-highlight="toggleHighlight"
		/>
		<p class="entry-c2 ml-1 mr-8">
			<!-- <div class="input-field entry-c2 ml-1 mr-8"> -->
				<textarea 
					type="text" 
					name="text" 
					class="materialize-textarea"
					v-model="newEntry.text" 
					placeholder="Tap to make an entry"
					maxlength="120"
					wrap="soft"
				></textarea>
			<!-- </div> -->
		</p>
		<div class="entry-c3 ml-1 mr-1">
			<button type="submit" class="entry-add-btn waves-effect waves-black btn-floating">
				<i class="material-icons">add</i>
			</button>
		</div>
		
	</form>
</template>

<script>
import moment from 'moment'
import HighlightBtn from './HighlightBtn.vue'

export default {
  components: { HighlightBtn },
	name: 'NewEntry',
	props: {},
	data() {
		return {
			newEntry: {
				highlight: false,
				date: '',
				text: ''
			}
		}
	},
	methods: {
		toggleHighlight() {
			this.newEntry.highlight = !this.newEntry.highlight;
		},
		onSubmit(e) {
			e.preventDefault();
			if (!this.newEntry.text) { 
				// alert('Please write something'); // TODO: make it a toast ?
				return; 
			}

			this.newEntry.id = Math.floor(Math.random()*100000); // TODO: be
			this.newEntry.date = moment().format();
			console.log("newEntry: ", this.newEntry);
			this.$emit('add-task', this.newEntry);
			// resetting the form
			this.newEntry = {
				highlight: false,
				date: '',
				text: ''
			}
		}
	}
}
</script>

<style scoped>
/* .entry-add-btn {} */
.materialize-textarea {
	color: white;
}
/* textarea {
	white-space: pre;
  overflow-wrap: normal;
} */
</style>
