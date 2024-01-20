<template>
  <div id="app" class="font-raleway min-h-screen w-screen text-zinc-900">
    <TopBanner />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TopBanner from "./components/TopBanner.vue";
</script>
