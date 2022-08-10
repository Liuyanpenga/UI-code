<template>
  <div class="header">
    <div class="logo" @click="openAside">帅照</div>
    <div class="menu">菜单</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject,Ref } from 'vue'

export default defineComponent({
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    console.log(asideVisible.value);
    
    const openAside = () => {
      asideVisible.value= !asideVisible?.value
    }
    return{openAside}
  },
})
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: skyblue;
    padding: 10px;
  }
</style>>