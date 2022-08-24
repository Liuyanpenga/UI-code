
<template>
  <div>
  <h1>Switch 开关 </h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-actions">
      <Switch1/>
    </div>
    <div class="demo-actions">
      <Button @click="look">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.codeVisible">
      <pre><v-md-preview :text="block"></v-md-preview></pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持禁用 </h2>
    <div class="demo-actions">
      <Switch2/>
    </div>
    <div class="demo-actions">
      <Button @click="look1">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.visible">
      <pre><v-md-preview :text="blocks"></v-md-preview></pre>
    </div>
  </div>
</div>
<div>
  <p>
    下一节：<router-link to="/doc/button"><strong>Button 组件</strong> </router-link>
  </p>
</div>
</template>
<script lang ="ts"> 
import '../assets/scss/code.scss'
import Switch from '../lib/Switch.vue';
import Switch1 from './Switch1.vue';
import Switch2 from './Switch2.vue';
import Button from '../lib/Button.vue';
import switch1 from '../markdown/switch1.md?raw';
import switch2 from '../markdown/switch2.md?raw';
import { useStore } from 'vuex';


import {ref} from 'vue';
export default {
  components: {Switch,Button},
  setup(){
    const store = useStore()

    const bool = ref(false)

    const block = ref(switch1)
    const blocks = ref(switch2)
    const look = () => {
      store.commit('updatedCodeVisible')
    };
    const look1 = () => {
      store.commit('updatedVisible')
    };
    return{bool,Switch1,Switch2,block,blocks,look,look1}
  }
}
</script>
