import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOCvhYV07eY3HGg1lBbIRI7_SnzVwk_lc",
  authDomain: "my-diet-63174.firebaseapp.com",
  projectId: "my-diet-63174",
  storageBucket: "my-diet-63174.appspot.com",
  messagingSenderId: "472930115671",
  appId: "1:472930115671:web:962fb2015f05a78e33c312",
  measurementId: "G-F4RSNT0QJS",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount("#app");
