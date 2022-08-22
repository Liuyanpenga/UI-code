<template>
  <article class="markdown-body">
    <v-md-preview :text="markdownTxt"></v-md-preview>
  </article>
</template>
<script setup lang="ts">

let props = defineProps({
        markdownTxt: String
    }) 
</script>