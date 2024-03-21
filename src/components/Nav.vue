<template>
  <div class="flex items-center justify-evenly text-2xl m-2">
    <router-link
      class="py-1 px-3 rounded-lg border-2 hover:bg-blue-400 hover:text-white hover:shadow-md transition-all"
      to="/"
      >Home</router-link
    >
    <RouterLink
      class="py-1 px-3 rounded-lg border-2 hover:bg-blue-400 hover:text-white hover:shadow-md transition-all"
      to="/feed"
      >Feed</RouterLink
    >
    <router-link
      class="py-1 px-3 rounded-lg border-2 hover:bg-blue-400 hover:text-white hover:shadow-md transition-all"
      to="/login"
      >Login</router-link
    >
    <router-link
      class="py-1 px-3 rounded-lg border-2 hover:bg-blue-400 hover:text-white hover:shadow-md transition-all"
      to="/registration"
      >Register</router-link
    >

    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </div>
  <hr />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const router = useRouter();

const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>
