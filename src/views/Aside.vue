<template>
  <div class="aside">
    <ul>
      <li>
        <router-link to="/doc/introduce">介绍</router-link>
      </li>
      <li>
        <router-link to="/doc/install">安装</router-link>
      </li>
       <li>
        <router-link to="/doc/started">使用</router-link>
      </li>
      <li>
        <router-link to="/doc/switch">Switch 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog 组件</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs 组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>


<style lang="scss" scoped>

.aside{
  position: absolute;
  height:100vh; 
  width: 120px;
  background: #fff;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  &>ul>li {
    >.router-link-active{
    color: #409eff;
    background-color: #ecf5ff;
    padding: 0;
}
  list-style: none;
    margin-top: 16px;
  a{
  text-decoration: none;
  display: block;
   &:hover{
    color: #6cb4ff;
  }
  }
}
}

</style>