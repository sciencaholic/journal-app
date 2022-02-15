import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueHighlights from 'vue-highlights'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

// createApp(App).use(router, VueHighlights).mount('#app')
createApp(App).use(router).mount('#app')
