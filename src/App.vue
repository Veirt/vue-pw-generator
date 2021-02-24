<template>
  <div class="my-10 flex justify-center flex-col items-center ">
    <h1 class="text-3xl text-gray-300 uppercase">Password Generator</h1>
    <Generator />
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
