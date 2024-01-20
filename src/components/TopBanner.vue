<template>
  <div
    class="sticky top-0 flex h-20 items-center justify-between bg-zinc-900 px-3 text-white shadow shadow-md lg:px-8"
  >
    <router-link :to="{ name: 'Home' }">
      <div
        class="flex w-max items-center border-b border-transparent p-2 transition-all duration-300 hover:border-zinc-400"
      >
        <div class="bg-cerulean h-12 w-12" />
        <div class="ml-3">
          <h1 class="text-2xl font-medium tracking-wider">Chromata</h1>
          <span class="font-thin text-zinc-400">with thecolorapi</span>
        </div>
      </div>
    </router-link>
    <div class="hidden lg:block">
      <div class="flex items-center">
        <span>
          <!-- todo: extract navlink component -->
          <router-link
            :class="[
              'transition-all duration-300',
              $route.name === 'Home'
                ? 'text-white'
                : 'text-zinc-400 underline hover:text-zinc-300',
            ]"
            :to="{ name: 'Home' }"
            >home</router-link
          >
          <span class="mx-5 text-zinc-400">|</span>
          <router-link
            :class="[
              'transition-all duration-300',
              $route.name === 'Rainbow'
                ? 'text-white'
                : 'text-zinc-400 underline hover:text-zinc-300',
            ]"
            :to="{ name: 'Rainbow' }"
            >rainbow palette</router-link
          >
          <span class="mx-5 text-zinc-400">|</span>
          <router-link
            :class="[
              'transition-all duration-300',
              $route.name === 'Scheme'
                ? 'text-white'
                : 'text-zinc-400 underline hover:text-zinc-300',
            ]"
            :to="{ name: 'Scheme' }"
            >color scheme palette</router-link
          >
          <span class="mx-5 text-zinc-400">|</span>
        </span>
        <a
          href="https://www.thecolorapi.com/"
          target="_blank"
          class="flex items-center text-zinc-400 underline hover:text-zinc-300"
        >
          thecolorapi <ExternalIcon class="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExternalIcon from "./icons/ExternalIcon.vue";
</script>
