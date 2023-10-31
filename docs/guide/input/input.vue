<template>
  <div class="fk-guide--label">API</div>
  <div class="fk-guide--content">
    <div class="fk-guide--tabs">
      <div class="fk-guide--tab clickable"
           v-for="type of types"
           @click="selectedType = type.id"
           :class="selectedType === type.id && 'selected'"
           v-text="type.value"
      />
    </div>

    <div class="fk-guide--tab-section">
      <div class="fk-guide--tab-section--left clickable">
        <div v-for="content of contents[selectedType]"
             :class="selectedContent === content.id && 'selected'"
             @click="onClickContent(content)"
        >
          {{ content.value }}
        </div>
      </div>

      <div class="fk-guide--tab-section--right">
        {{description}}
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const selectedType = ref(0)
const selectedContent = ref(0)
const description = ref('')

const types = [
  {
    value: 'props',
    id: 0,
  },
  {
    value: 'styles',
    id: 1,
  },
  {
    value: 'events',
    id: 2
  }]
const contents = {
  0: [
    {
      value: 'label',
      id: 0
    },
    {
      value: 'modelValue',
      id: 1
    },
  ],
  1: [
    {
      value: 'ㅎㅎ',
      id: 0
    },
  ],
  2: [
    {
      value: 'ㅋㅋ',
      id: 0
    },
  ]
}
const descriptions = {
  0: {
    0: '하하...'
  }
}

const onClickContent = ({id}) => {
  selectedContent.value = id
  description.value = descriptions[selectedType.value][selectedContent.value]
}

</script>
