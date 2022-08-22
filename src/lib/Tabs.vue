<template>
  <div class="Qt-tabs">
    <div class="Qt-tabs-nav" ref="container">
      <div
        class="Qt-tabs-nav-item"
        :class="{selected:t === selected}"
        v-for="(t,index) in titles"
        :key="index"
        @click="select(t)"
        :ref="el => { if (t===selected) selectedItem = el }" 
      >
      <!-- :ref="el => { if (el) navs[index] = el }" -->
      {{t}}</div>
       <div class="Qt-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="Qt-tabs-content">
      <!-- <component
        class="Qt-tabs-content-item"
        v-for="(c,index) in defaults"
        :is="c"
        :key="index"
        :class="{selected:c.props.title === selected}"
      /> -->
      <component :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref,onMounted,onUpdated, watchEffect, computed } from "vue";
import Tab from "../lib/Tab.vue";

export default defineComponent({
  name: "Tabs",
  components: { Tab },
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // const navs = ref<HTMLDivElement[]>([])
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {  //立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
  /*  //获取到两个div
    const divs = navs.value
    // 筛选出 selected 的div元素
    const divOne = divs.filter(div => div.classList.contains('selected'))[0]
    // 得到筛选出来的 div 的宽度
    const {width} = divOne.getBoundingClientRect()
    // 将宽度赋值给 indicator
    indicator.value.style.width = width + 'px'
  */
    const {width} = selectedItem.value.getBoundingClientRect()
    indicator.value.style.width = width + 'px'

    const {left:left1} = container.value.getBoundingClientRect()
    const {left:left2} = selectedItem.value.getBoundingClientRect()
    const left = left2 - left1
    indicator.value.style.left = left + 'px'

    }
    onMounted(x)
    onUpdated(x)
    // 检查子组件的类型
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    // 遍历得出组件的 title
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    // 子组件将自定义事件向父组件传递。
    const select = (title:String) => {
      context.emit('update:selected', title)
    }
    const current = computed(() => {
      return defaults.find((tag) => {
        return tag.props.title === props.selected
       })
    })
    return {
      defaults,
      titles,
      select,
      // navs,
      selectedItem,
      indicator,
      container,
      current
    };
  },
});
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.Qt-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
     &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>