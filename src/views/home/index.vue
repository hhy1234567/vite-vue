<template>
  <div class="content">
    <div class="grid-contet">
      <a-row :gutter="[8, 16]" class="gutter-row">
        <a-col :span="6" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <div class="gutter-box">col-6</div>
        </a-col>
        <a-col :span="6" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
          <div class="gutter-box">
            <img
              src="@/assets/beijing.png"
              alt=""
              style="width: 100%; height: 100%"
            />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getAtion } from "@/api/api";
  import axios from "axios";

  onMounted(() => {
    getAtion("/api/getUsers", {}).then((res) => {
      console.log(res);
    });
  });
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
    height: 100%;
    background-color: #000;
    padding: 20px;
    .grid-contet {
      width: 100%;
      height: 100%;
      background-color: #edeaeb;
      .gutter-row {
        height: 100%;
        .gutter-box {
          height: 100%;
        }
      }
    }
  }
</style>
