<template>
<div>
  <h1>Button 按钮</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-actions">
      <Button theme="link">链接</Button>
      <Button theme="text">文本</Button>
      <Button>正常</Button>
    </div>
    <div class="demo-actions">
      <Button @click="look1">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.codeVisible1">
      <pre><v-md-preview :text="block1"></v-md-preview></pre>
    </div>
  </div>

  <div class="demo">
    <h2>支持大小</h2>
    <div class="demo-actions">
      <Button size="small">小小小</Button>
      <Button>普普通通</Button>
      <Button size="big">大大大</Button>
    </div>
    <div class="demo-actions">
      <Button @click="look2">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.codeVisible2">
      <pre><v-md-preview :text="block2"></v-md-preview></pre>
    </div>
  </div>

  <div class="demo">
    <h2>状态按钮</h2>
    <div class="demo-actions">
      <Button>普通按钮</Button>
      <Button level="main">主要按钮</Button>
      <Button level="warning">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="demo-actions">
      <Button @click="look3">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.codeVisible3">
      <pre><v-md-preview :text="block3"></v-md-preview></pre>
    </div>
  </div>

  <div class="demo">
    <h2>加载按钮</h2>
    <div class="demo-actions">
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
    <div class="demo-actions">
      <Button @click="look4">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.codeVisible4">
      <pre><v-md-preview :text="block4"></v-md-preview></pre>
    </div>
  </div>
  <div class="demo">
    <h2>禁用按钮</h2>
    <div class="demo-actions">
      <Button disabled>禁用按钮</Button>
      <Button>正常按钮</Button>
    </div>
    <div class="demo-actions">
      <Button @click="look5">查看代码</Button>
    </div>
    <div class="demo-code" v-if="$store.state.codeVisible5">
      <pre><v-md-preview :text="block5"></v-md-preview></pre>
    </div>
  </div>
  </div>
  <div>
    <p> 下一节：<router-link to="/doc/dialog"><strong>Dialog 组件</strong> </router-link></p>
  </div>
</template>

<script>
import '../assets/scss/code.scss'

import Button from "../lib/Button.vue";
import button1 from "../markdown/button1.md?raw";
import button2 from "../markdown/button2.md?raw";
import button3 from "../markdown/button3.md?raw";
import button4 from "../markdown/button4.md?raw";
import button5 from "../markdown/button5.md?raw";
import { ref } from "vue";
import { useStore } from 'vuex';


export default {
  name: "ButtonTest",
  components: { Button },
  setup() {
    const store = useStore()

    const block1 = ref(button1);
    const block2 = ref(button2);
    const block3 = ref(button3);
    const block4 = ref(button4);
    const block5 = ref(button5);
    const look1 = () => {
      store.commit('updatedCodeVisible1')
    };
    const look2 = () => {
      store.commit('updatedCodeVisible2')
    };
    const look3= () => {
      store.commit('updatedCodeVisible3')
    };
    const look4 = () => {
      store.commit('updatedCodeVisible4')
    };
    const look5 = () => {
      store.commit('updatedCodeVisible5')
    };
    return { block1, block2, block3, block4, block5, look1,look2,look3,look4,look5, };
  },
};
</script>
<style lang="scss">

</style>