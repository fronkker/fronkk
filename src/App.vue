<template>
  <div>
    <test-input
        v-model="value"
        label="아이디"
        :rules="[regExp, regExp2]"
        hint="힌트메시지"
        type="password"
    />
  </div>
</template>

<script setup>
import TestInput from "./components/TestInput.vue";
import {ref} from "vue";

const value = ref(111)

const regExp = /[0-9]{2}/
const regExp2 = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi
</script>

<style lang="scss" scoped>

</style>