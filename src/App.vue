<template>
<!--  <fk-input-->
<!--    v-model="valueForEmit"-->
<!--    icon-name="search"-->
<!--    icon-clickable-->
<!--  />-->
  <fk-pagination v-model="page" :size="10" :totalPages="21" is-show-last-page is-show-first-page/>
</template>

<script setup>
import {ref} from "vue";
// import {FkInput} from "../dist/my-lib.js";
import FkPagination from "./components/FkPagination.vue";


const page = ref(0)

const valueForEmit = ref('dsadsd')
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
</style>
