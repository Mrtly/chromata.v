<template>
  <div class="min-h-[100px] p-4 bg-slate-900 text-white">
    <div class="flex items-center justify-between">
      <router-link :to="{name: 'Home'}">
          <div class="w-max p-2 flex items-center border border-transparent hover:border-slate-700">
            <div class="h-12 w-12 bg-amber-700"></div>
            <div class="ml-3">
              <h1 class="text-2xl font-medium tracking-wider">Chromata</h1>
              <span class="font-thin text-slate-400">using thecolorapi</span>
            </div>
        </div>
      </router-link>
      <div class="flex items-center">
        <span class="hidden lg:block">
          <router-link class="underline text-slate-500 hover:text-slate-300" :to="{name: 'Home'}">home</router-link>
          <span class="mx-5 text-slate-500">|</span>
          <router-link class="underline text-slate-500 hover:text-slate-300" :to="{name: 'Rainbow'}">rainbow palette</router-link>
          <span class="mx-5 text-slate-500">|</span>
          <router-link class="underline text-slate-500 hover:text-slate-300" :to="{name: 'Scheme'}">palette by HSL scheme</router-link>
          <span class="mx-5 text-slate-500">|</span>
        </span>
        <a href="https://www.thecolorapi.com/" target="_blank" class="flex items-center underline text-slate-500 hover:text-slate-300">thecolorapi.com<External class="ml-2 w-5 h-5"/></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import External from './icons/External.vue'
</script>
