<template>
  <div class="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
    <div
      class="max-w-3xl px-5 text-center text-xl font-medium text-zinc-700 lg:px-0"
    >
      A fun little color project using thecolorapi.
    </div>
    <div class="mt-10 flex flex-wrap gap-5">
      <router-link
        :to="{ name: 'Rainbow' }"
        class="group mx-auto flex w-[360px] flex-col justify-between p-8 shadow hover:shadow-lg"
      >
        <div class="mb-8 text-lg">
          Create a rainbow palette of colors spanning across the color circle.
        </div>
        <div
          class="text-lochmara group-hover:text-cerulean mx-auto block text-3xl underline transition-all duration-300"
        >
          Rainbow palette
        </div>
      </router-link>
      <router-link
        :to="{ name: 'Scheme' }"
        class="group mx-auto flex w-[360px] flex-col justify-between p-8 shadow hover:shadow-lg"
      >
        <div class="mb-8 text-lg">
          Create a color scheme palette and experiment with HSL values.
        </div>
        <div
          class="text-lochmara group-hover:text-cerulean mx-auto block text-3xl underline transition-all duration-300"
        >
          Color scheme palette
        </div>
      </router-link>
    </div>
  </div>
</template>
