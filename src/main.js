import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Scheme from './views/Scheme.vue'
import Rainbow from './views/Rainbow.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/scheme', component: Scheme, name: 'Scheme' },
  { path: '/rainbow', component: Rainbow, name: 'Rainbow' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
