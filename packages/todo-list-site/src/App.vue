<!-- <script setup lang="ts">
import { RouterLink } from 'vue-router';
</script> -->

<template>
  <header class="h-[60px] flex items-center justify-center bg-light-50">
    <router-link to="/home" class="mr-2">Home</router-link>
    <router-link to="/about" class="mr-2">About</router-link>
    <router-link to="/todo" class="mr-2">Todo</router-link>
    <router-link to="/talk">Talk</router-link>
  </header>
  <main class="h-[calc(100%-60px)] border">
    <suspense>
      <router-view></router-view>
    </suspense>
  </main>
</template>

<style lang="less" scoped>
.cus-router-link {
  margin-right: 10px;
  color: lightblue;
}

.router-link-active {
  color: lightskyblue;
}
</style>
