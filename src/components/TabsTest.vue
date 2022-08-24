<template>
<div>
  <h1>Tabs 标签页</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-actions">
      <Tabs v-model:selected="selected">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
      </Tabs>
    </div>
    <div class="demo-actions">
      <Button @click="look">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.visible1">
      <pre><v-md-preview :text="block"></v-md-preview></pre>
    </div>
  </div>


</div>
</template>

<script lang="ts">
import '../assets/scss/code.scss'
import {ref} from 'vue'
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import Button from '../lib/Button.vue';
import tab from '../markdown/tab.md?raw';
import { useStore } from 'vuex';

export default({
  components:{Tab,Tabs,Button},
  setup(){
    const store = useStore()
    const selected = ref('导航1')
    const block = ref(tab)

    const look = () => {
      store.commit('updatedVisible1')
    };

    return{selected,block,look}
  },
})
</script>

<style scoped>
  
</style>