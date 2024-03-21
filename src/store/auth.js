import { defineStore } from "pinia";

export const useAuth = defineStore("deneme", {
  state: () => ({
    deneme: "deneme",
  }),
  actions: {
    logDen() {
      console.log(state.deneme);
    },
  },
});
