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
    <div>
      <ul>
        <li v-for="(notice, i) in notices" :key="notice.id" class="flex">
          <span>{{ notice.id }}</span>
          <NuxtLink :to="{ name: 'notice-id', params: { id: notice.id } }">
            <span>{{ notice.title }}</span>
          </NuxtLink>
          <span>{{ notice.content }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
