import { defineStore } from "pinia";
import type { Notice } from "~/@type/notice/notice";

export const useNoticeStore = defineStore("NoticeStore", () => {
  const { $api } = useNuxtApp();

  const notices = ref<Notice[]>([]);
  const notice = ref<Notice | null>(null);
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

  async function fetchGetNoticeDetail(id: number) {
    error.value = null;
    try {
      const { data } = await $api.getNoticeDetails(id);
      notice.value = data;
    } catch (e: any) {
      error.value = e?.message ?? "failed to fetch notice";
    }
  }

  return { notices, error, fetchNotices, notice, fetchGetNoticeDetail };
});
