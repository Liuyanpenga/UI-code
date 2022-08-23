```js
<template>
  <h1>Tabs 示例1</h1>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'

export default({
  components:{Tab,Tabs},
  setup(){
    const selected = ref('导航1')

    return{ selected }
  },
})
</script>
```