<template>
  <div class="f-input-field">
    <div v-text="label" class="f-label"/>
    <input placeholder="ajd" v-model="value" class="f-input"
           @update:model-value="onUpdateValue"
           :class="{
              'invalid': !valid
           }"
    >
    <div v-if="!valid" v-text="hint" class="f-hint"/>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps(['modelValue', 'label', 'hint', 'rules'])

const value = ref(props.modelValue)

const regRules = props.rules.map(rule => rule = new RegExp(rule))

const valid = ref(true)

const onUpdateValue = () => {
  if (value.value) {
    valid.value = regRules.every(rule => {
      rule.test(value)
    })
  } else {
    valid.value = true
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/_color";

.f-input-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.f-label {
  color: #{$gray500};
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: left;
}

.f-input {
  border: 1px solid #{$gray200};
  padding: 14px 13px 14px 13px;
  width: 200px;
  height: 10px;
  border-radius: 4px;
}

.invalid {
  border: 1px solid #{$error};
}

.f-hint {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #{$error};
}
</style>