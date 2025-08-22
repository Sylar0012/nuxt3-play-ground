import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const { username } = storeToRefs(authStore);
  if (username.value === "" && to.path !== "/login") {
    return navigateTo("/login");
  }
});
