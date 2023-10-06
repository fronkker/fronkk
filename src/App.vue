<template>
  <div>
    <test-input
        v-model="value"
        label="아이디"
        :rules="[regExp]"
        hint="힌트메시지"
        type="password"
    />
  </div>
</template>

<script setup>
import TestInput from "./components/TestInput.vue";
import {ref} from "vue";

const value = ref()

const regExp = /^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/u
const regExp2 = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi
</script>

<style lang="scss" scoped>

</style>