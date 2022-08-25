<template>
<div>
    <h1>dialog 对话框</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-actions">
        <Button @click="toggle">打开对话框</Button>
        <Dialog
          v-model:visible="visible"
          :onClickOverLay="true"
          :ok="f1"
          :cancel="f2"
        >
          <template v-slot:title>
            <h3>对话框</h3>
          </template>
          <template v-slot:content>
            <h3>hi</h3>
            <div>hi~</div>
          </template>
        </Dialog>
      </div>
      <div class="demo-actions">
        <Button @click="look" v-if="!$store.state.visible4">查看代码</Button>
        <Button @click="$store.state.visible4=false" v-else>隐藏代码</Button>
      </div>
      <div class="demo-code" v-if="$store.state.visible4">
        <pre><v-md-preview :text="block"></v-md-preview></pre>
      </div>
    </div>
      <div class="demo">
        <h2>函数式打开</h2>
        <div class="demo-actions">
          <Button @click="showDialog">打开对话框</Button>
        </div>
        <div class="demo-actions">
          <Button @click="look1" v-if="!$store.state.visible5">查看代码</Button>
          <Button @click="$store.state.visible5=false" v-else>隐藏代码</Button>
        </div>
        <div class="demo-code" v-if="$store.state.visible5">
          <pre><v-md-preview :text="blocks"></v-md-preview></pre>
        </div>
    </div>
    </div>
    <div>
      <p>
        下一节：<router-link to="/doc/tabs"><strong>Tabs 组件</strong> </router-link>
      </p>
    </div>

</template>

<script lang="ts">
import '../assets/scss/code.scss'

import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import dialog1 from '../markdown/dialog1.md?raw';
import dialog2 from '../markdown/dialog2.md?raw';

import { openDialog } from "../lib/dialog";
import { useStore } from 'vuex';

export default {
  name: "DialogTest",
  components: { Dialog, Button },
  setup() {
    const store = useStore()

    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: "hello",
      })
    };
     const ok = () => {console.log(ok);
    }
    const cancel = () => {console.log(2);
    }
    const look = () => {
      store.commit('updatedVisible4')
    };
    const look1 = () => {
      store.commit('updatedVisible5')
    };
    const block = ref(dialog1)
    const blocks = ref(dialog2)

    return { visible, toggle, f1, f2, showDialog,ok,cancel,look,look1,block,blocks };
  },
};
</script>

<style lang="scss">
</style>