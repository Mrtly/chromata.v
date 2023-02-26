<template>
  <div class="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
    <div class="mb-10 max-w-2xl text-center text-lg">
      A fun little color project using thecolorapi's enpoints for <code>/id</code> and <code>/scheme</code>.
      <br/>
      Create a rainbow palette of colors spanning across the color circle.
      <br/>
      Create color schemes and experiment with various HSL values.
    </div>
    <div>
      <router-link 
        :to="{name: 'Rainbow'}"
        class="block mx-auto shadow hover:shadow-xl transition-all duration-200 border p-10 underline text-fire w-max text-2xl">
        Create a rainbow palette
      </router-link>
      <div class="my-5"/> <!-- divider -->
      <router-link 
        :to="{name: 'Scheme'}"
        class="block mx-auto shadow hover:shadow-xl transition-all duration-200 border p-10 underline text-fire w-max text-2xl">
        Create a palette from a HSL scheme
      </router-link>
    </div>
  </div>
</template>
