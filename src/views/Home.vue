<template>
<div class="container">
  <common-header />
  <div class="banner">
    <h1>晴天 UI</h1>
    <h3>一个随心所欲的 UI 框架</h3>
    <p class="actions">
      <button><a href="https://github.com/Liuyanpenga/UI-code">Github</a></button>
      <button><router-link to="/doc/introduce">快速开始</router-link></button>
    </p>
  </div>
</div>
  <div class="footer">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div class="introduction">
        <h3>基于Vue3</h3>
        <p>运用Vue3中的Composition API</p>
        </div>
      </li>
      <li>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vite"></use>
        </svg>
        <div class="introduction">
        <h3>Vite工具</h3>
        <p>轻量快速的热重载及灵活的 API </p>
        </div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="introduction">
          <h3>通俗易懂</h3>
          <p>小白都能看懂的组件源码</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import CommonHeader from "./CommonHeader.vue";

export default ({
  name: "Home",
  components: { CommonHeader },
});
</script>

<style lang='scss'>
.container{
  background: rgb(159,165,213);
  background: linear-gradient(145deg, rgba(159,165,213,1) 0%, rgba(232,245,200,1) 100%);
  height: 500px;
  clip-path: ellipse(80% 60% at 50% 40%);
.banner{
  text-align: center;
  margin-top: 100px;
  &>h3{
    color: #1a2b3b;
    margin: 10px;
  }
  &>p{
    margin-top: 30px;
    &>button{
      width: 64px;
      height: 32px;
      border: none;
      margin-left: 16px;
      background: #a8afd4;
      color: #fff;
      border-radius: 4px;
      }
      &>a {
        text-decoration: none;
    }
  }
}
}
.footer{
  height: 200px;
  width: 390px;
  margin: 0 auto;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1000px) {
    width: 1000px;
  }
}
.footer>ul{
  display: flex;
  flex-wrap: wrap;
  margin-left: 32px;
  margin-top: 20px;
  justify-content: space-between;
    li{
    display: flex;
    justify-content: center;
    padding: 8px;
    .introduction{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    svg{
      width: 64px;
      height: 64px;
    }
  }
  }
 

</style>