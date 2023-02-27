<template>
  <div class="h-28 py-4 px-3 lg:px-8 shadow-md bg-zinc-900 text-white">
    <div class="flex items-center justify-between">
      <router-link :to="{name: 'Home'}">
        <div class="w-max p-2 flex items-center border-b border-transparent hover:border-zinc-400 transition-all duration-300">
          <div class="h-12 w-12 bg-moonstone"></div>
          <div class="ml-3">
            <h1 class="text-2xl font-medium tracking-wider">Chromata</h1>
            <span class="font-thin text-zinc-400">with thecolorapi</span>
          </div>
        </div>
      </router-link>
      <div class="flex items-center">
        <span class="hidden lg:block">
          <!-- todo: extract navlink component -->
          <router-link :class="['transition-all duration-300',
            $route.name === 'Home' ? 'text-white' : 'underline text-zinc-400 hover:text-zinc-300']" 
            :to="{name: 'Home'}">home</router-link>
          <span class="mx-5 text-zinc-400">|</span>
          <router-link :class="['transition-all duration-300',
            $route.name === 'Rainbow' ? 'text-white' : 'underline text-zinc-400 hover:text-zinc-300']"  
            :to="{name: 'Rainbow'}">rainbow palette</router-link>
          <span class="mx-5 text-zinc-400">|</span>
          <router-link :class="['transition-all duration-300',
            $route.name === 'Scheme' ? 'text-white' : 'underline text-zinc-400 hover:text-zinc-300']" 
            :to="{name: 'Scheme'}">color scheme palette</router-link>
          <span class="mx-5 text-zinc-400">|</span>
        </span>
        <a href="https://www.thecolorapi.com/" target="_blank" 
          class="flex items-center underline text-zinc-400 hover:text-zinc-300">
          thecolorapi.com<External class="ml-2 w-5 h-5"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import External from './icons/External.vue'
</script>
