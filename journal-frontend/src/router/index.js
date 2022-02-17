import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import JournalPage from "@/views/JournalPage.vue";
import MomentsPage from "@/views/MomentsPage.vue";
import TagsPage from "@/views/TagsPage.vue";

const routes = [
  { path:"/", name:"Home", component:Home },
  { path:"/journal", name:"JournalPage", component:JournalPage },
  { path:"/moments", name:"MomentsPage", component:MomentsPage },
  { path:"/tags", name:"TagsPage", component:TagsPage },

	// {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL
  routes
})

export default router

