<template>
<div class="container">
  <common-header />
  <div class="banner">
    <h1>泡椒 UI</h1>
    <h2>一个随心所欲的 UI 框架</h2>
    <p class="actions">
      <a href="">Github</a>
      <a href="">快速开始</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CommonHeader from "../components/CommonHeader.vue";

export default defineComponent({
  name: "Home",
  components: { CommonHeader },
  setup() {
    const data = reactive({});

    return {};
  },
});
</script>

<style scoped>

.banner{
  text-align: center;
  margin-top: 100px;
}
</style>