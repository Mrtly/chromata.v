<template>
  <div id="app" class="w-screen min-h-screen">
    <TopBanner/>
    <router-view />
  </div>
</template>

<script setup>
import TopBanner from './components/TopBanner.vue'
</script>
