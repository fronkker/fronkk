<template>
  <div class="fk-page">
    <div class="fk-tabs">
      <div class="fk-title clickable" @click="onClickTab(LEFT_MENUS.INDEX)">Fronkk UI Library</div>

      <div class="fk-tab">
        <div class="clickable"
             v-for="menu of leftMenus"
             :class="selectedLeftMenu.id === menu.id && 'selected--left-menu'"
             @click="onClickTab(menu)" v-text="menu.title"/>
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

      <div v-if="selectedLeftMenu?.id !== LEFT_MENUS.INDEX.id" class="fk-guide--title" v-text="selectedLeftMenu.title"/>
      <fk-separator v-if="selectedLeftMenu?.id !== LEFT_MENUS.INDEX.id"/>

      <div class="fk-guide--component" v-if="selectedLeftMenu.type === MENU_TYPES.COMPONENT">
        <component :is="selectedLeftMenu.component"/>
      </div>

      <div class="fk-guide--docs" v-html="selectedLeftMenu.guide"/>

    </div>


  </div>
</template>

<script setup>
import {ref} from "vue";
import FkSeparator from "./components/FkSeparator.vue";
import {LEFT_MENUS, MENU_TYPES} from "./core/index.js";

const valueForEmit = ref('2222ggg')
const value = ref({id: 1, name: 'a'})

const leftMenus = Object.values(LEFT_MENUS).filter(({id}) => !!id)

const selectedLeftMenu = ref(LEFT_MENUS.INDEX)
const onClickTab = (tab) => {
  selectedLeftMenu.value = tab
}

</script>

<style lang="scss" scoped>
@import './assets/css/_pagination';

// 외부에서 input Style 조정할때 선택자
:deep(#fk-input) {
  width: 200px;
}
</style>
