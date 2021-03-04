<template>
  <div class="my-5 text-white">
    <input
      v-model="password"
      class="px-1 rounded bg-raisin-black2 "
      type="text"
    />
    <label class="my-3 flex justify-start items-start">
      <div
        class="bg-raisin-black2 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-antique-ruby"
      >
        <input v-model="numbers" type="checkbox" class="opacity-0 absolute" />
        <svg
          class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="text-gray-300 select-none">Numbers</div>
    </label>

    <label class="my-3 flex justify-start items-start">
      <div
        class="bg-raisin-black2 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-antique-ruby"
      >
        <input v-model="symbols" type="checkbox" class="opacity-0 absolute" />
        <svg
          class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="text-gray-300 select-none">Symbols</div>
    </label>

    <label class="my-3 flex justify-start items-start">
      <div
        class="bg-raisin-black2 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-antique-ruby"
      >
        <input v-model="lowercase" type="checkbox" class="opacity-0 absolute" />
        <svg
          class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="text-gray-300 select-none">Lowercase</div>
    </label>

    <label class="my-3 flex justify-start items-start">
      <div
        class="bg-raisin-black2 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-antique-ruby"
      >
        <input v-model="uppercase" type="checkbox" class="opacity-0 absolute" />
        <svg
          class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="text-gray-300 select-none">Uppercase</div>
    </label>

    <label class="my-3 flex justify-start items-start">
      <input
        v-model="length"
        type="text"
        class="w-6 text-center focus:outline-none rounded bg-raisin-black2"
      />
      <div
        class="bg-raisin-black2 flex justify-center items-center mr-2 "
      ></div>
      <div class="text-gray-300 mr-5">Length</div>
    </label>

    <button
      v-on:click="generatePassword()"
      class="bg-raisin-black2 rounded-md font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-700"
    >
      Generate
    </button>
  </div>
</template>

<script>
import generator from "generate-password";
export default {
  name: "Generator",
  data() {
    return {
      password: "",
      length: 10,
      numbers: false,
      symbols: false,
      lowercase: true,
      uppercase: true
    };
  },
  methods: {
    generatePassword() {
      try {
        this.password = generator.generate({
          length: this.length,
          numbers: this.numbers,
          symbols: this.symbols,
          lowercase: this.lowercase,
          uppercase: this.uppercase
        });
      } catch (TypeError) {
        console.log("There are no checked checkboxes");
        this.password = "";
      }
    }
  }
};
</script>

<style>
input:checked + svg {
  display: block;
}
</style>
