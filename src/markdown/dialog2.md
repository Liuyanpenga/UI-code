```ts
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import { openDialog } from "../lib/dialog";
import { ref,h } from "vue"

export default {
  components: {
    Button
  },
  setup(){
    const showDialog = () => {
      penDialog({
        title: '标题',
        content: "hello",
      })
    }

    return{showDialog}
  }
}
</script>
```