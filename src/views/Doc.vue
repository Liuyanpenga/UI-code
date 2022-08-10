<template>
   <div class="common-layout">
    <el-container>
      <el-header width="100%">
        <common-header/>
      </el-header>
      <el-container>
        <el-aside width="200px"><Aside/></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import CommonHeader from '../components/CommonHeader.vue';
import Aside from '../components/Aside.vue';
export default {
  components: { CommonHeader,Aside },
    
}
</script>
<style lang="scss" scoped>
    
</style>