<template>
  <div>
    <!-- inputs -->
    <div class="border border-b p-5 shadow-md lg:px-10 lg:py-6">
      <h1 class="pt-2 text-xl font-medium">
        Create a rainbow palette with saturation & lightness variance
      </h1>
      <div class="my-4 flex flex-wrap items-baseline gap-2">
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
        Using the <code>/id</code> endpoint, results are calculated using
        multiple hues across the 360° color circle, and the saturation/lightness
        values:
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
        <div v-else class="flex flex-wrap gap-4 p-10">
          <div v-for="color in state.uniqueColors" :key="color.name.value">
            <ColorSquarie
              :color-rgb="color.rgb.value"
              :color-name="color.name.value"
              :color-hex="color.hex.value"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from "vue";
import ColorSquarie from "../components/ColorSquarie.vue";
import SpinnerThing from "../components/SpinnerThing.vue";
import PendingDots from "../components/PendingDots.vue";
import CustomInput from "../components/CustomInput.vue";
import CustomButton from "../components/CustomButton.vue";
import { deduplicateByName } from "../utils/dedupe";
import type { State } from "./SchemePage.vue";

const state = reactive<State>({
  allColors: [],
  uniqueColors: [],
  currentHsl: "",
  loading: false,
});

const queries = reactive({ s: 100, l: 50 });

const error = ref(false);

const rainbowHues = computed(() => {
  let arr = [];
  for (let i = 0; i <= 360; i++) {
    arr.push(i);
    i = i + 7;
  }
  return arr;
});

const getColors = async () => {
  state.loading = true;
  state.allColors = []; //clear
  state.uniqueColors = []; //clear

  try {
    for (let hue in rainbowHues.value) {
      let hueQuery = rainbowHues.value[hue];
      let url = `https://www.thecolorapi.com/id?hsl=${hueQuery},${queries.s}%,${queries.l}%&format=json`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => state.allColors.push(data));
    }
    if (state.allColors) {
      // @ts-expect-error (todo fix)
      state.uniqueColors = deduplicateByName(state.allColors);

      state.currentHsl = `s: ${queries.s}%, l: ${queries.l}%`;
    }
  } catch (err) {
    error.value = true;
  } finally {
    state.loading = false;
  }
};

onMounted(() => getColors());
</script>
