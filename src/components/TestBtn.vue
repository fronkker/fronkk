<template>
  <button class="test">{{message}}</button>
</template>

<script setup>
import {ref} from "vue";

const message = ref('레오')
</script>

<style>
.test{
  background-color: white;
  color:blue
}

</style>


