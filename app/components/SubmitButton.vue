<script setup lang="ts">
const defaultPt = {
  root: `!rounded-0 !text-2xl !bg-[#ebb87c] !px-5 !border-2 !border-[#31462c] !outline-none !hover:outline-hidden !active:outline-hidden !focus:outline-hidden`,
  label: `!text-[#31462c] !text-center`,
  dropdownIcon: `!text-[#31462c]`,
  overlay: `!-mt-1 !border-0`,
  listContainer: `!border-[#31462c] !border-2 !bg-[#ebb87c]`,
  list: `!gap-0 !p-0`,
};
</script>

<template>
  <Button :pt="defaultPt" label="저장" type="submit" />
</template>
