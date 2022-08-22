<template>
  <button class="Qt-switch" @click="toggleButton" :class="{'Qt-checked':value}" :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props:{value: Boolean,
  disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: true,
    },},
  setup(props,context) {

    const toggleButton = () => {
      context.emit('update:value',!props.value)
      
    };
    return { toggleButton };
  },
};
</script>

<style lang="scss">
.Qt-switch {
  height: 22px;
  width: 44px;
  border: none;
  background: gray;
  border-radius: 11px;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  >span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 18px;
  width: 18px;
  background: white;
  border-radius: 9px;
  transition: left 250ms;
  }
  &.Qt-checked{
  background: pink;
  }
  &.Qt-checked > span {
  left: calc(100% - 18px - 2px);
  
  }
}






</style>