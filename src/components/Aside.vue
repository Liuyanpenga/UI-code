<template>
  <div v-show="asideVisible">
    <ul>
      <li>xxx组件</li>
      <li>xxx组件</li>
      <li>xxx组件</li>
      <li>xxx组件</li>
      <li>xxx组件</li>
      <li>xxx组件</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent,inject,Ref } from 'vue'

export default defineComponent({
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log(asideVisible);
     
  },
})
</script>


<style lang="scss" scoped>

li{
      list-style: none;
      margin: 20px;
    }
</style>