<template>
  <div>
    <!-- inputs -->
    <div class="border border-b p-5 shadow-md lg:px-10 lg:py-6">
      <h1 class="pt-2 text-xl font-medium">
        Create a color scheme palette by HSL values
      </h1>
      <div class="my-4 flex flex-wrap items-baseline gap-2">
        <div>
          <CustomInput
            id="hue"
            v-model="queries.h"
            label="hue"
            name="hue"
            type="number"
            :min="0"
            :max="360"
            :disabled="state.loading"
          />
        </div>
        <div>
          <CustomInput
            id="saturation"
            v-model="queries.s"
            label="saturation"
            name="saturation"
            type="number"
            :min="0"
            :max="100"
            :disabled="state.loading"
          />
        </div>
        <div>
          <CustomInput
            id="lightness"
            v-model="queries.l"
            label="lightness"
            name="lightness"
            type="number"
            :min="0"
            :max="100"
            :disabled="state.loading"
          />
        </div>
        <div>
          <CustomButton :disabled="state.loading" @click="getColors">
            Generate
          </CustomButton>
        </div>
      </div>
      <div class="mt-2 font-thin text-zinc-600">
        Using the <code>/scheme</code> endpoint, results are calculated for the
        HSL value. Showing results for:
        <code
          v-if="!state.loading && state.currentHsl"
          class="whitespace-nowrap text-lg"
          >{{ state.currentHsl }}</code
        >
        <PendingDots v-else />
      </div>
      <div class="mt-2 font-thin text-zinc-600">
        Colors are deduplicated by color name; only one tile per color name is
        presented.
        <span class="font-thin">
          Unique color names:
          <code
            v-if="!state.loading && state.uniqueColors.length"
            class="text-lg"
            >{{ state.uniqueColors.length }}</code
          >
          <PendingDots v-else />
        </span>
      </div>
    </div>
    <!-- colors -->
    <div>
      <SpinnerThing v-if="state.loading" class="mx-auto mt-10" />
      <div v-else>
        <div v-if="error" class="text-dodger m-10">
          Oh no! Something went wrong. Please try again later.
        </div>
        <div v-else class="p-10">
          <div class="flex flex-wrap gap-4">
            <ColorSquarie
              v-for="color in state.uniqueColors"
              :key="color"
              :color-name="color.name.value"
              :color-rgb="color.rgb.value"
              :color-hex="color.hex.value"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import ColorSquarie from "../components/ColorSquarie.vue";
import SpinnerThing from "../components/SpinnerThing.vue";
import PendingDots from "../components/PendingDots.vue";
import CustomInput from "../components/CustomInput.vue";
import CustomButton from "../components/CustomButton.vue";
import { deduplicateByName } from "../utils/dedupe";

export interface Color {
  name: {
    value: string;
  };
  rgb: {
    value: string;
  };
  hex: {
    value: string;
  };
}

export interface State {
  allColors: Color[];
  uniqueColors: Color[];
  currentHsl: string;
  loading: boolean;
}

const state = reactive<State>({
  allColors: [],
  uniqueColors: [],
  currentHsl: "",
  loading: false,
});

const queries = reactive({ h: 180, s: 100, l: 50, size: 500 });

const error = ref(false);

const base = "https://www.thecolorapi.com/scheme?";
const format = "format=json";
const count = computed(() => `count=${queries.size}`);

const url = computed(() => {
  return `${base}hsl=${queries.h},${queries.s}%,${queries.l}%&${format}&${count.value}`;
});

const getColors = async () => {
  state.loading = true;
  state.allColors = []; // clear
  state.uniqueColors = []; // clear
  state.currentHsl = ""; // clear

  try {
    await fetch(url.value)
      .then((response) => response.json())
      .then((data) => (state.allColors = data.colors));

    if (state.allColors) {
      // @ts-expect-error (type doesn't match? todo)
      state.uniqueColors = deduplicateByName(state.allColors);

      state.currentHsl = `hsl(${queries.h}, ${queries.s}%, ${queries.l}%)`;
    }
  } catch (err) {
    error.value = true;
  } finally {
    // fake delay so that loading spinnerThing does not look like a glitch
    setTimeout(() => {
      state.loading = false;
    }, 1000);
  }
};

onMounted(() => getColors());
</script>
