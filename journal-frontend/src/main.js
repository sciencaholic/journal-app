import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'v-calendar/dist/style.css';
import 'mosha-vue-toastify/dist/style.css'

createApp(App).use(router).mount('#app')
