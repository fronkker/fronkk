<template>
  <div
    style="width: 700px; height: 700px; border: 1px solid grey; border-radius: 3px; display: flex; flex-direction: column; margin-right: auto; margin-left: auto;">

    <div>
      Vmodel :: {{ valueForEmit }}
    </div>

    <fk-separator/>

    <div style="display: flex; flex-direction: column; margin: auto auto auto auto;">

      <fk-input
        v-model="valueForEmit"
        icon-name="search"
        icon-clickable

        clearable

        label="이건 라벨"
        placeholder="이건 플레이스홀더"
        hint-message="이건 힌트메시지 "
      />

    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";
import FkInput from "./components/FkInput.vue";
import FkSeparator from "./components/FkSeparator.vue";

const valueForEmit = ref('2222ggg')
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
@import './assets/css/_pagination';

// fk-input Style 조정하는 법!!
:deep(.fk-input) {
  width: 300px;
}
</style>
