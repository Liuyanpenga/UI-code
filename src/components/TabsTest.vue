<template>
  <h1>Tabs 示例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script>
import {defineComponent, ref} from 'vue'
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
export default defineComponent({
  name:'Tabtest',
  components:{Tab,Tabs},
  setup(){
    const x = ref('导航1')
    return{
      x
    }
  },
})
</script>

<style scoped>
  
</style>