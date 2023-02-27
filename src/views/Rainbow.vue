<template>
  <div>
    <!-- inputs -->
    <div class="border-b border-jellyBean shadow-md p-5 lg:px-10 lg:py-6">
      <h1 class="pt-2 text-xl font-medium">Create a rainbow palette with saturation & lightness variance</h1>
      <div class="my-4 flex flex-wrap items-baseline gap-2">
        <div><CustomInput label="saturation" name="saturation" id="saturation" 
            type="number" :min="0" :max="100" 
            :disabled="state.loading"
            v-model="queries.s"
          /></div>
        <div><CustomInput label="lightness" name="lightness" id="lightness" 
            type="number" :min="0" :max="100"
            :disabled="state.loading"
            v-model="queries.l"
          /></div>
        <div><CustomButton :disabled="state.loading" @click="getColors">
            Generate
          </CustomButton></div>
      </div>
      <div class="mt-2 text-zinc-600 font-thin">
        Using the <code>/id</code> endpoint, results are calculated using multiple hues across the 360° color circle, and the saturation/lightness values: 
        <code v-if="!state.loading && state.currentSL" class="text-lg whitespace-nowrap">{{ state.currentSL }}</code>
        <PendingDots v-else/>
        </div>
      <div class="mt-2 text-zinc-600 font-thin">
        Colors are deduplicated by color name; only one tile per color name is presented.
        <span class="font-thin">
          Unique color names: <code v-if="!state.loading && state.uniqueColors.length" class="text-lg">{{state.uniqueColors.length}}</code>
          <PendingDots v-else/>
        </span>
      </div>
    </div>
    <!-- colors -->
    <div>
      <Spinner v-if="state.loading" class="mx-auto mt-10"/>
      <div v-else>
        <div v-if="error" class="text-jellyBean m-10">
          Oh no! Something went wrong. Please try again later.
        </div>
        <div v-else class="p-10 flex flex-wrap gap-4">
          <div v-for="color in state.uniqueColors" :key="color">
            <ColorSquarie 
              :colorRgb="color.rgb.value"
              :colorName="color.name.value"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue'
import ColorSquarie from '../components/ColorSquarie.vue';
import Spinner from '../components/Spinner.vue';
import PendingDots from '../components/PendingDots.vue';
import CustomInput from '../components/CustomInput.vue';
import CustomButton from '../components/CustomButton.vue';
import { deDuplicateByName } from '../utils/dedupe';

const state = reactive({ 
  allColors: [], 
  uniqueColors: [], 
  currentSL: '', 
  loading: false 
});

const queries = reactive({ s: 100, l: 50 });

const error = ref(false);

const rainbowHues = computed(() => {
  let arr = [];
  for (let i = 0; i <= 360; i++) {
    arr.push(i);
    i = i+7
  }
  return arr;
})

const getColors = async () => {
  state.loading = true;
  state.allColors = []; //clear
  state.uniqueColors = []; //clear
  
  try {
    for (let hue in rainbowHues.value) {
      let hueQuery = rainbowHues.value[hue];
      let url = `https://www.thecolorapi.com/id?hsl=${hueQuery},${queries.s}%,${queries.l}%&format=json`
      await fetch(url)
        .then((response) => response.json())
        .then((data) => state.allColors.push(data));
      }
    if (state.allColors) {
      state.uniqueColors = deDuplicateByName(state.allColors);

      state.currentSL = `s: ${queries.s}%, l: ${queries.l}%`;
    }
  } catch (err) {
    error.value = true;

  } finally {
    state.loading = false;
  }
}

onMounted(() => getColors())

</script>
