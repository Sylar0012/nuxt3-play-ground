<script setup lang="ts">
import LoginInput from "~/components/LoginInput.vue";

const username = ref<string>("");
const password = ref<string>("");

function login() {
  console.log(username.value);
  console.log(password.value);
}
</script>

<template>
  <div class="h-full w-full">
    <form class="h-full" @submit.prevent="login">
      <div class="h-full flex flex-col items-center justify-center">
        <div class="flex flex-col mb-2">
          <LoginInput
            v-model="username"
            placeholder="아이디"
            input-type="text"
          />
          <LoginInput
            v-model="password"
            placeholder="비밀번호"
            input-type="password"
          />
        </div>
        <SubmitButton />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
