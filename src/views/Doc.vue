<template>
   <div class="common-layout">
      <common-header class="header"/>
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
    .header{
      position: relative;
      width: 100%;
      height: 60px; 
    }
    .el-aside{
      display: block;
      position: absolute;
      left: 10px;
      top: 60px;
      bottom: 0px;
      text-align: center;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
    }
    .el-main {
      position: absolute;
      left: 160px;
      right: 0;
      top: 60px;
      bottom: 0;
      overflow-y: scroll;
  }

</style>