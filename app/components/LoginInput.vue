<script setup lang="ts">
interface Props {
  placeholder: string;
  inputType: string;
}
const model = defineModel<string>();
const { placeholder, inputType } = defineProps<Props>();
</script>

<template>
  <InputText
    :pt="{
      root: `!bg-[#fff] !border-2 !outline-none !h-15 !rounded-2xl !text-3xl !font-bold !text-center !mb-3 !text-black !border-black`,
    }"
    :placeholder="placeholder"
    :type="inputType"
    v-model="model"
  />
</template>

<style scoped></style>
