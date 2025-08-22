import { defineStore } from "pinia";
import type { Notice } from "~/@type/notice/notice";

export const useNoticeStore = defineStore("NoticeStore", () => {
  const { $api } = useNuxtApp();

  const notices = ref<Notice[]>([]);
  const error = ref<string | null>(null);

  async function fetchNotices() {
    error.value = null;
    try {
      const { data } = await $api.getNotices();
      notices.value = data;
    } catch (e: any) {
      error.value = e?.message ?? "failed to fetch notices";
    }
  }

  return { notices, error, fetchNotices };
});
