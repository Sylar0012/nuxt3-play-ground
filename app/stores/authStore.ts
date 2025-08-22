import { defineStore } from "pinia";
import {useLocalStorage} from "@vueuse/core";
import { navigateTo } from "#app";

export const useAuthStore = defineStore("AuthStore", () => {
  const { $api } = useNuxtApp();
  const username = useLocalStorage("username",'');
  const error = ref<string>("");

  async function login(_username: string, _password: string) {
    try {
      const {data} = await $api.login({username:_username, password:_password});
      useLocalStorage("username", data.username);
      useLocalStorage("accessToken", data.token);
      navigateTo("/");
    } catch (e: any) {
      error.value = e?.message ?? "failed to fetch notices";
    }
  }

  return {
    username,
    login,
  };
});
