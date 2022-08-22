<template>
   <div class="common-layout">
      <common-header/>
      <el-container>
        <el-aside width="120px " v-if="asideVisible">
          <Aside />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>
<script lang="ts">
import CommonHeader from './CommonHeader.vue';
import Aside from './Aside.vue';
import {inject,Ref} from 'vue'
export default {
  components: { CommonHeader,Aside },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    
    return{asideVisible}
  },  
}
</script>
<style lang="scss" scoped>
    .el-aside{
      text-align: center;
    }
</style>