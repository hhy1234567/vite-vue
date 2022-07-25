<template>
  <div class="routerview">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  // import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style lang="scss">
  body {
    height: 100%;
    background-color: #fff;
  }
  #app {
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
    height: 100%;
  }
  .routerview {
    height: 100%;
    width: 100%;
  }
</style>
