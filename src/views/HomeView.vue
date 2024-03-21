<template>
  <div class="bg-gray-400 grid grid-cols-1 gap-4 mt-[10em]">
    <h1 class="text-[5em] text-center">Welcome to MY Diet</h1>
    <div class="text-center text-2xl flex">
      <button @click="goLog" class="border-2">Log-in</button>
      <button @click="goReg" class="border-2">Register</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goReg = () => {
  router.push("./registration");
};

const goLog = () => {
  router.push("./login");
};
</script>
