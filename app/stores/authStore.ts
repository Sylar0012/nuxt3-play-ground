import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", () => {
  const username = ref<string>("");
  const password = ref<string>("");

  function login(_username: string, _password: string) {
    username.value = _username;
    password.value = _password;
  }

  return {
    username,
    password,
    login,
  };
});
