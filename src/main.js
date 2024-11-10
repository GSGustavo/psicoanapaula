import { createApp } from 'vue'

import './style.css'
import 'remixicon/fonts/remixicon.css'

// import Index from './pages/Index.vue'

import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
