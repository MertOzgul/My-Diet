<template>
  <div>
    <form @submit.prevent>
      <p>Register</p>
      <label>e-mail</label>
      <input
        class="border-2"
        type="e-mail"
        placeholder="e-mail"
        v-model="emailInput"
      />
      <label>password</label>
      <input
        class="border-2"
        type="password"
        placeholder="password"
        v-model="passwordInput"
      />
      <button @click="register" class="border-2 bg-blue-400">submit</button>
      <button @click="signInWithGoogle" class="border-2 bg-blue-400">
        Sign in with Google
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const emailInput = ref("");
const passwordInput = ref("");

const register = () => {
  createUserWithEmailAndPassword(
    getAuth(),
    emailInput.value,
    passwordInput.value
  )
    .then((data) => {
      console.log("Succesfully Registered");
      router.push("/feed");
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.message);
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((err) => {
      /*handle err*/
    });
};
</script>
