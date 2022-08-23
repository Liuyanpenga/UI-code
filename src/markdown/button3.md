```js
<template>
  <div>
    <Button>普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
import  Button from "../lib/Button.vue";

export default {
  components: {
    Button
  }
}
</script>
```