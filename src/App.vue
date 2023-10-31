<template>
  <div class="fk-page">
    <div class="fk-tabs">
      <div class="fk-title">Fronkk UI Library</div>

      <div class="fk-tab">
        <div class="clickable">{{ 'installation' }}</div>
        <div class="clickable" v-for="component of components" @click="selectedComp = component">
          <div :class="selectedComp === component && 'selected-component'">
            {{ component }}
          </div>
        </div>
      </div>

      <div class="fk-tab--bottom">
        <a
          href="https://github.com/fronkker/fronkk"
          target="_blank"
        >
          <img class="github-icon"
               src="./assets/img/github-mark-white.png"
               alt="깃헙 바로가기 아이콘"
          >
        </a>
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
      <!--      <div class="fk-guide&#45;&#45;docs">-->
      <div class="fk-guide--docs" v-html="markedInputGuide"></div>
      <!--      </div>-->

    </div>


  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import NoItem from "../docs/guide/noItem.vue"
import {inputGuide} from "../docs/guide/input/input.js"
import FkSeparator from "./components/FkSeparator.vue";
import {marked} from "marked";

const valueForEmit = ref('2222ggg')
const value = ref({id: 1, name: 'a'})

const markedInputGuide = ref(marked(inputGuide))

const components = ['input', 'pagination', 'separator']
const selectedComp = ref(components[0])


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
