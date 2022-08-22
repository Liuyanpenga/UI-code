import './views/Qingt.scss';
import './index.scss';
import 'github-markdown-css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import VMdPreview from '../plugins/index';


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(VMdPreview);
app.mount('#app')
