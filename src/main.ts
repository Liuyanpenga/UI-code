import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'home',
      component:() => import('./views/Home.vue')
    },
    {
      path:'/doc',
      name:'doc',
      component:() => import('./views/Doc.vue')
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
