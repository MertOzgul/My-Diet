<template>
  <div>
    <form @submit.prevent>
      <p>Login</p>
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
      <p v-if="errMsg">error</p>
      <button @click="register" class="border-2 bg-blue-400">submit</button>
      <button @click="signInWithGoogle" class="border-2 bg-blue-400">
        Sign in with Google
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const emailInput = ref("");
const passwordInput = ref("");
const errMsg = ref("");

const register = () => {
  signInWithEmailAndPassword(getAuth(), emailInput.value, passwordInput.value)
    .then((data) => {
      console.log("Succesfully Loged In");
      router.push("/feed");
    })
    .catch((err) => {
      console.log(err.code);
      alert(err.message);
      switch (err.code) {
        case "auth/user/invalid-email":
          errMsg.value = "invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
      }
    });
};
const signInWithGoogle = () => {};
</script>
