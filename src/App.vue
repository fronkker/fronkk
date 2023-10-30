<template>
  <div class="fk-page">
    <div class="fk-tabs">
      <div class="fk-title">Fronkk UI Library</div>

      <div class="fk-tab clickable">{{'installation'}}</div>
      <div class="fk-tab clickable" v-for="component of components" @click="selectedComp = component">
        <div :class="selectedComp === component && 'selected-component'">
          {{ component }}
        </div>
      </div>

    </div>

    <div class="fk-guide--section">

      <div class="fk-guide--title" v-text="`FK-${selectedComp.toUpperCase()}`"/>

      <fk-separator/>

      <!--      <fk-input-->
      <!--        v-model="valueForEmit"-->

      <!--        clearable-->

      <!--        label="이건 라벨"-->
      <!--        placeholder="이건 플레이스홀더"-->
      <!--        hint-message="이건 힌트메시지"-->
      <div class="fk-guide--docs">
      <md-block src="../docs/guide/input/input.md" />
      </div>

    </div>


  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import NoItem from "../docs/guide/noItem.vue"
import FkSeparator from "./components/FkSeparator.vue";

const valueForEmit = ref('2222ggg')
const value = ref({id: 1, name: 'a'})

const components = ['input', 'pagination', 'separator']
const selectedComp = ref(components[0])

const onClickComponent = computed(() => {
  switch (selectedComp.value) {
    case components[0]:
      return InputGuide

    default:
      return NoItem
  }
})


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
