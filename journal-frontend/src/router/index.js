import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import JournalPage from "@/views/JournalPage.vue";
import MomentsPage from "@/views/MomentsPage.vue";
import TagsPage from "@/views/TagsPage.vue";

const routes = [
  { path:"/", name:"Home", component:Home },
  { path:"/journal", name:"JournalPage", component:JournalPage },
  { path:"/moments", name:"MomentsPage", component:MomentsPage },
  { path:"/tags", name:"TagsPage", component:TagsPage, children: [{ path:'/:tag', component:TagsPage }] },
  // { path:"/tags", name:"TagsPage", component:TagsPage },
]

const router = createRouter({
  history: createWebHistory(), // process.env.BASE_URL
  routes
})

export default router

