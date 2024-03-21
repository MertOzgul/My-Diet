<template>
  <div class="font-roboto">
    <Nav></Nav>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>
