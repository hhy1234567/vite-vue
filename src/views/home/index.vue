<template>
  <hello-world :msg="msgs"></hello-world>
</template>

<script setup lang="ts">
  const msgs = ref("你好");
</script>

<style scoped></style>
