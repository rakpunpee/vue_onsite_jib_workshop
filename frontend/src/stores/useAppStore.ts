import api from "@/services/api";
import { server } from "@/services/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("appStore", () => {
  const username = ref<string>("");
  const isLogged = ref<boolean>(false);

  async function login(user: any) {
    let result = await api.login(user);
    if (result == true) {
      isLogged.value = true;
      username.value = user.username;
    }
  }

  function logout() {
    api.logoff();
    isLogged.value = false;
    username.value = "";
  }

  return { username, isLogged, login, logout };
});
