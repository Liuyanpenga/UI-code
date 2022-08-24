<template>
   <div class="common-layout">
      <div class="nav"><common-header/></div>
      <el-container>
        <el-aside width="160px" v-if="asideVisible">
          <Aside />
        </el-aside>
        <el-main>
        <div class="main">
          <router-view></router-view>
        </div>
        </el-main>
      </el-container>
  </div>
</template>
<script lang="ts">
import CommonHeader from './CommonHeader.vue';
import Aside from './Aside.vue';
import { inject,Ref } from 'vue'
export default {
  components: { CommonHeader,Aside },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')


    return{asideVisible}
  },  
}
</script>
<style lang="scss" scoped>
  .nav{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
  }
    .el-aside{
      z-index: 200;
      display: block;
      position: fixed;
      left: 0;
      top: 77px;
      bottom: 0;
      text-align: center;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      float: left;
      .aside{
        width: 160px;
      }
    }
    .el-main {
      width: 91%;
      position: fixed;
      top: 77px;
      left: 170px;
      bottom: 0;
      overflow-y: scroll;
  }
    @media (max-width:500px) {
      .el-aside{
        width: 300px;
          .aside{
            width: 300px;
          }
      }
    }
    @media (max-width:500px) {
      .el-main {
      width: 100%;
      position: fixed;
      top: 77px;
      left: 0;
      bottom: 0;
      overflow-y: scroll;
  }
    }
</style>