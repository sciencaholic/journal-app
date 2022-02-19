<template>
	<DatePicker 
		ref="calendar" 
		v-model="date" 
		is-dark 
		color="teal" 
		:masks="masks" 
		:attributes='attrs' 
		:max-date='new Date()'
	>
		<template v-slot="{ inputValue, togglePopover }">
			<div class="child-box-head">
				<button 
					class="date-select-btn waves-effect waves-black btn-floating p-1 ml-1 mr-1"
					@click="togglePopover"
				>
					<i class="material-icons">date_range</i>
				</button>
				<h3 class="head-title">{{inputValue}}</h3>
			</div>
		</template>
		<template v-slot:footer>
			<div class="popover-footer-bg">
				<button
					class="waves-effect waves-black btn"
					@click="moveToToday"
				>
					Today
				</button>
			</div>
		</template>
	</DatePicker>
</template>

<script>
import moment from 'moment';
import { DatePicker } from "v-calendar";

export default {
	name: "CalendarModal",
	components: {
		DatePicker
	},
	data() {
    return {
			today: moment().format(),
      date: moment().format(),
      masks: {
        input: 'MMMM D, YYYY',
      },
			attrs: [
        {
          key: 'today',
          highlight: { fillMode:'outline' },
          dates: moment().format(),
        }
			]
    };
  },
	watch: {
		date: function() {
			this.$emit('journal-date-change', this.date)
		}
	},
	methods: {
		moveToToday() {
      this.$refs.calendar.move(this.today);
			this.date = this.today;
			this.$refs.calendar.hidePopover();
    },
	}
}
</script>

<style scoped>
.child-box-head {
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	width: 75%;
}
.popover-footer-bg {
	background-color: #232b3b;
	text-align: center;
	padding: 0.5rem;
	border-top-width: 1px;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
}
</style>