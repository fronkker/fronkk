<template>
  <div class="f-input-field">
    <div v-text="label" class="f-label"/>
    <input placeholder="ajd" :value="inputValue" class="f-input"
           @input="onUpdateValue"
           :class="{
              'invalid': !valid
           }"
    >
    <div v-if="!valid" v-text="hint" class="f-hint"/>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps(['modelValue', 'label', 'hint', 'rules', 'type'])

const inputValue = ref(props.modelValue)
let unmaskedValue = ''

const regRules = props.rules.map(rule => rule = new RegExp(rule))

const valid = ref(true)

const TYPES = {
  PASSWORD: 'password'
}

const onUpdateValue = (e) => {
  inputValue.value = e.target.value
  unmaskedValue = e.target.value

  console.log(e.target.value)

  // TODO mask 다시 구조 잡고 짜보자
  if (inputValue.value) {
    let maskedValue = []

    console.log(unmaskedValue)

    if (props.type === TYPES.PASSWORD) {
      maskedValue = new Array(unmaskedValue?.length).fill('*')

      inputValue.value = maskedValue.join('')
    }

    if (regRules?.length) {
      valid.value = regRules.every(rule => {
        rule.test(unmaskedValue)
      })
    }

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