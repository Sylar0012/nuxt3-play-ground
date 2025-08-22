import { defineNuxtPlugin } from "#app";
import { apiClient } from "~/client/ApiClient";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: apiClient,
    },
  };
});
