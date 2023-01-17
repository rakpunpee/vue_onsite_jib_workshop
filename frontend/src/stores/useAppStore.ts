import api from "@/services/api";
import { server } from "@/services/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("appStore", () => {
  const username = ref<string>("");
  const isLogged = ref<boolean>(false);

  return {};
});
