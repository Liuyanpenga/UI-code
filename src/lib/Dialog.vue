<template>
  <template v-if="visible">
  <!-- 解决上下级、层叠问题 -->
  <teleport to='body'>
      <!-- 点击遮罩层关闭 -->
    <div class="Qt-dialog-overlay" @click="onClickOverLay"></div>
    <div class="Qt-dialog-wrapper">
      <div class="Qt-dialog">
        <header>
          <slot name="title"/>
          <span class="Qt-dialog-close" @click="close"></span>
        </header>
        <main>
          <slot name="content"/>
        </main>
        <footer>
          <Button @click="cancel">取消</Button>
          <Button @click="ok" level="main">确定</Button>
        </footer>
      </div>
    </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  name: "Dialog",
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    onClickOverLay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverLay = () => {
      if (props.onClickOverLay) {
        close();
      }
    };
    const ok = () => {
      // if (props.ok && props.ok() !== false) 等价于下面 ES6新语法
      props.cancel?.()
        close();
    };
    const cancel = () => {
      props.cancel?.()
        close();
    };
    return {
      close,
      onClickOverLay,
      cancel,
      ok,
    };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.Qt-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>