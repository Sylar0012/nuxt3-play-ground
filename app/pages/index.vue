<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useAuthStore} from "~/stores/authStore";

const authStore = useAuthStore();
const { username } = storeToRefs(authStore);

</script>

<template>
  <div>
    <p>welcome {{ username }}</p>
  </div>
</template>

<style scoped></style>
