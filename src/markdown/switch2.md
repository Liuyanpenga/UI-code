```js
<template>
  <Switch v-model:value="off" disabled/>
  <Switch v-model:value="on" disabled/>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {Switch,},
  setup() {

    const off = ref(false)
    const on = ref(true);

    return {off,on};
  },
};
</script>
```