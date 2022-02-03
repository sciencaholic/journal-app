import { createWebHistory, createRouter } from "vue-router"
import { Home } from "@/components/Home.vue"
import { JournalPage } from "@/components/JournalPage.vue";
import { MomentsPage } from "@/components/MomentsPage.vue";

const routes = [
  { path:"/", name:"Home", component:Home },
  { path:"/journal", name:"JournalPage", component:JournalPage },
  { path:"/moments", name:"MomentsPage", component:MomentsPage },
  // { path:"/tags", name:"TagsPage", component:TagsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router