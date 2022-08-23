```js
<template>
<div>
  <Button disabled>禁用按钮</Button>
  <Button>正常按钮</Button>
</div>
</template>

<script lang="ts">
import  Button from "../lib/Button.vue"

export default {
  components: {
    Button
  }
}
</script>
```