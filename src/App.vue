<template>
  <!-- pwgen.exlog.wtf -->
  <div class="w-full h-screen bg-center bg-no-repeat bg-cover bg-raisin-black">
    <div
      class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center"
    >
      <div class="mx-4 text-center text-gray-300">
        <h1 class="font-bold text-3xl mb-4 uppercase">Password Generator</h1>
        <div>
          <Generator />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Generator from "./components/Generator.vue";

export default defineComponent({
  name: "App",
  components: {
    Generator
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");

h1 {
  font-family: "Montserrat";
}
</style>
