<template>
  <hello-world :msg="msgs"></hello-world>
  <div class="content"></div>
</template>

<script setup lang="ts">
  import { getAtion } from "@/api/api";
  import axios from "axios";
  const msgs = ref("你好");
  console.log(
    import.meta.env,
    // process.env.VUE_APP_API_URL,
    "环境变量"
  );
  onMounted(() => {
    getAtion("/api/getUsers", {}).then((res) => {
      console.log(res);
    });
  });
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    // height: 100vh;
    background-color: #000;
  }
</style>
