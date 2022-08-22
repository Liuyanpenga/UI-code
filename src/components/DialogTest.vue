<template>
  <div>
    <h1>dialog 示例1</h1>
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
    <div>
      <h1>示例2</h1>
      <Button @click="showDialog">打开对话框</Button>
    </div>
    <div>
      <p>
        下一节：<router-link to="/doc/tabs"><strong>Tabs 组件</strong> </router-link>
      </p>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/dialog";
export default {
  name: "DialogTest",
  components: { Dialog, Button },
  setup() {
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
    return { visible, toggle, f1, f2, showDialog,ok,cancel };
  },
};
</script>

<style lang="scss">
</style>