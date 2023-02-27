<template>
  <div class="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
    <div class="max-w-3xl px-5 lg:px-0 text-xl text-center font-medium text-zinc-700">A fun little color project using thecolorapi's endpoints for <code>/id</code> and <code>/scheme</code>.</div>
    <div class="mt-10 flex flex-wrap gap-5">
      <div class="mx-auto w-[360px] shadow hover:shadow-lg p-8 flex flex-col justify-between">
        <div class="text-lg mb-8">Create a rainbow palette of colors spanning across the color circle.</div>
        <router-link 
          :to="{name: 'Rainbow'}"
          class="block mx-auto text-3xl underline text-moonstone hover:text-elm transition-all duration-300">
          Rainbow palette
        </router-link>
      </div>
      <div class="mx-auto w-[360px] shadow hover:shadow-lg p-8 flex flex-col justify-between">
        <div class="text-lg mb-8">Create a color scheme palette and experiment with HSL values.</div>
        <router-link 
          :to="{name: 'Scheme'}"
          class="block mx-auto text-3xl underline text-moonstone hover:text-elm transition-all duration-300">
          Color scheme palette
        </router-link>
      </div>
    </div>
  </div>
</template>
