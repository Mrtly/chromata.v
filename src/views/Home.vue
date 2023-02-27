<template>
  <div class="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
    <div class="mb-10 max-w-3xl text-center text-lg px-5 lg:px-0">
      <div class="text-xl font-medium text-zinc-700">A fun little color project using thecolorapi's enpoints for <code>/id</code> and <code>/scheme</code>.</div>
     
     
      
      <div class="mt-20">Create a rainbow palette of colors spanning across the color circle.</div>
      <div>Create color schemes and experiment with various HSL values.</div>
    </div>
    <div class="flex flex-wrap gap-5">
      <router-link 
        :to="{name: 'Rainbow'}"
        class="block mx-auto text-3xl underline text-moonstone hover:text-elm transition-all duration-300">
        Rainbow palette
      </router-link>
      <div class="my-5"/> <!-- divider -->
      <router-link 
        :to="{name: 'Scheme'}"
        class="block mx-auto text-3xl underline text-moonstone hover:text-elm transition-all duration-300">
        Color scheme palette
      </router-link>
    </div>
  </div>
</template>
