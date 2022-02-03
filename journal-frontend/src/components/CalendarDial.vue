<template>
	<div class="calendar">
		<p class="calendar_my">{{calendar_my}}</p>
		<div class="carousel"> <!-- :key="date.id" v-for="date in calendar" -->
			<!-- <a class="carousel-item" :href="date.link"><img :src="date.src"></a> -->
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
			<a class="carousel-item" href="#one!"><img src="https://via.placeholder.com/50"></a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'CalendarDial',
  components: {},
	data() {
		return {
			calendar_my: "Jan '22",
			calendar: [
				{ src:"https://via.placeholder.com/50", link:"#one!" },
				{ src:"https://via.placeholder.com/50", link:"#one!" },
				{ src:"https://via.placeholder.com/50", link:"#one!" },
				{ src:"https://via.placeholder.com/50", link:"#one!" }
			]
		}
	}
}
</script>

<style scoped>
.carousel {
	height: 5rem;
}
.carousel .carousel-item {
	width: 5rem;
	height: 5rem;
}
.calendar_my {
	color: #ffffff;
	font-size: 1.5rem;
	text-align: center;
}
</style>