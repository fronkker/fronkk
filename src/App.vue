<template>
  <div
    style="width: 700px; height: 700px; border: 1px solid grey; border-radius: 3px; display: flex; flex-direction: row;">

    <div
      style="width: 150px; height: 150px; background: pink; display: flex; justify-content: center; align-items: center; margin: 16px;">
      <fk-separator vertical/>
    </div>

    <fk-input
      v-model="valueForEmit"
      icon-name="search"
      icon-clickable

      label="이건 라벨"
      placeholder="이건 플레이스홀더"
      hint-message="이건 힌트메시지 "
    />

  </div>
</template>

<script setup>
import {ref} from "vue";
import FkInput from "./components/FkInput.vue";
import FkSeparator from "./components/FkSeparator.vue";

const valueForEmit = ref('')
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
@import '@/assets/css/_pagination';

// fk-input Style 조정하는 법!!
:deep(.fk-input) {
  width: 300px;
}
</style>
