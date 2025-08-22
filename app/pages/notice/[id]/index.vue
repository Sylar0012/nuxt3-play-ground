<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNoticeStore } from "~/stores/noticeStore";

const route = useRoute();

const noticeId = route.params.id;
const noticeStore = useNoticeStore();

const { notice } = storeToRefs(noticeStore);

onMounted(() => {
  noticeStore.fetchGetNoticeDetail(Number(noticeId));
});
</script>

<template>
  <div v-if="notice">
    <ul>
      <li>
        {{ notice?.title }}
      </li>
      <li>
        {{ notice?.content }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
