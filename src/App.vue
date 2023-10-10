<template>
      <f-select
          label="셀렉트~"
          placeholder="플레이스홀더"

          v-model="value"
          :options="options"
      />

<!--      <f-select-->
<!--          label="셀렉트~"-->
<!--          placeholder="플레이스홀더"-->

<!--          emit-value-->

<!--          v-model="valueForEmit"-->
<!--          :options="options"-->
<!--      />-->


  <div v-if="false">
    <f-input
        placeholder="sdfdfd"
        v-model="value"
        label="아이디"
        :rules="[regExp]"
        hint="힌트메시지"
        type="password"
    />
  </div>
</template>

<script setup>
import FInput from "./components/FInput.vue";
import {ref} from "vue";
import FSelect from "./components/FSelect.vue";

const valueForEmit = ref(1)
const value = ref({id: 1, name: 'a'})

const options = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  },
  {
    id: 4,
    name: 'd'
  },
]

const regExp = /^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/u
const regExp2 = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi
</script>

<style lang="scss" scoped>

</style>