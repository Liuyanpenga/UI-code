```ts
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
    <Dialog v-model:visible="visible">
      <p>内容</p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
import Dialog from "../lib/Dialog.vue"
import { ref } from "vue"

export default {
  components: {
    Dialog,
    Button
  },
  setup(){
    const visible = ref(false)
    const showDialog = () => {
      visible.value = !visible.value
    }

    return{visible,showDialog}
  }
}
</script>
```