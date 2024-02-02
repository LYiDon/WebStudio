import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/AppRouter.js'

import '@/styles/index.scss';

createApp(App).use(Router).mount('#app')
