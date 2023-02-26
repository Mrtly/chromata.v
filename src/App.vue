<template>
  <div id="app" class="w-screen min-h-screen font-ubuntu text-zinc-900">
    <TopBanner/>
    <router-view />
  </div>
</template>

<script setup>
import TopBanner from './components/TopBanner.vue'
</script>
