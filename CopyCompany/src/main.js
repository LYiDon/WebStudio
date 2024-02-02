import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/AppRouter.js'



createApp(App).use(Router).mount('#app')
