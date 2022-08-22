import { createRouter, createWebHashHistory } from 'vue-router'
import installTxt from '../markdown/install.md?raw';
import introTxt from '../markdown/intro.md?raw';
import startTxt from '../markdown/start.md?raw';
import Install from '../lib/Install.vue';
import Introduce from '../lib/Introduce.vue';
import Start from '../lib/Start.vue';

const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'home',
      component:() => import('../views/Home.vue')
    },
    {
      path:'/doc',
      name:'doc',
      redirect:'/introduce',
      component:() => import('../views/Doc.vue'),
      children:[
        {
          path:'/doc/introduce',
          name:'introduce',
          component: Introduce, props: { markdownTxt: introTxt }
        },
        {
          path:'/doc/install',
          name:'install',
          component: Install, props: { markdownTxt: installTxt }
        },
        {
          path:'/doc/started',
          name:'started',
          component: Start, props: { markdownTxt: startTxt }
        },
        {
          path:'/doc/switch',
          name:'switch',
          component:() => import('../components/SwitchTest.vue')
        },
        {
          path:'/doc/button',
          name:'button',
          component:() => import('../components/ButtonTest.vue')
        },
        {
          path:'/doc/dialog',
          name:'dialog',
          component:() => import('../components/DialogTest.vue')
        },
        {
          path:'/doc/tabs',
          name:'tabs',
          component:() => import('../components/TabsTest.vue')
        },
      ]
    }
  ]
})
export default router