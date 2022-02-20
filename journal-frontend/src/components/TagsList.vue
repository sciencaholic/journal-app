<template>
	<div class="child-box-hor-scroll">
		<button 
			class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
			@click="swipeLeft"
		>
			<i class="material-icons">chevron_left</i>
		</button>

		<div ref="content" class="child-box-taglist">
			<div class="tags-list" :key="tag" v-for="tag in tagsList">
				<button 
					class="chip btn-flat lowercase"
					:class="(currentTag == tag) ? 'selected-chip' : 'unselected-chip'"
					@click="this.$emit('select-tag', tag)"	
				>{{tag}}</button>
			</div>
		</div>
		
		<button 
			class="transparent z-depth-0 waves-effect waves-black btn-floating p-1"
			@click="swipeRight"
		>
			<i class="material-icons">chevron_right</i>
		</button>
	</div>
</template>

<script>
export default {
  name: 'TagsList',
  components: {},
	props: {
		tagsList: Array,
		currentTag: String
	},
	data() {
		return {}
	},
	methods: {
		scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
        // Get the start timestamp
        const startTime = "now" in window.performance ? performance.now() : new Date().getTime();
				var scroll;
        scroll = function (timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress 
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -300, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 300, 800);
    }
	}
}
</script>

<style scoped>
.tags-list {
	display: inline;
	/* height: max-content; */
	overflow-x: auto;
}
.selected-chip {
	background-color: #1fb393;
	color: white;
}
.unselected-chip {
	background-color: white;
	color: #1fb393;
}
.lowercase {
	text-transform: unset !important;
}
.child-box-hor-scroll {
	display: flex;
}
.child-box-taglist {
	width: 75%;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
  /* box-shadow: inset 20px 20px 20px 20px rgb(0 0 0 / 0.5); */
}
.child-box-taglist::-webkit-scrollbar {
	width: 0px;
	background: transparent; /* make scrollbar transparent */
}
.chip {
	margin: 5px;
}
/* .child-box-taglist::-webkit-scrollbar {
	height: 0.75rem;
} */
/* .child-box-taglist::-webkit-scrollbar-track {
  border-radius: 2rem;
  background: #545454;
} */
/* .child-box-taglist::-webkit-scrollbar-thumb {
  background-color: #1fb393;
  border-radius: 2rem;
  border: 3px solid #545454;
} */
</style>