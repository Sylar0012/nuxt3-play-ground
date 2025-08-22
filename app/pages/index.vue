<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/authStore";
import { useNoticeStore } from "~/stores/noticeStore";

const authStore = useAuthStore();
const noticeStore = useNoticeStore();

const { username } = storeToRefs(authStore);
const { notices } = storeToRefs(noticeStore);

onMounted(() => {
  noticeStore.fetchNotices();
});
</script>

<template>
  <div>
    <p>welcome {{ username }}</p>
    <p>
      {{ notices }}
    </p>
  </div>
</template>

<style scoped></style>
