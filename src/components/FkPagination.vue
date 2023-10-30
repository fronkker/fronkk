<template>
  <section id="pagination">
    <div class="container">
      <div class="pagination--inner row">
        <div class="prev-box" :style="activeStyle(isFirstPaging)">
          <a class="page-btn first-page-btn" v-if="isShowFirstPage" @click="onClickFirstPage">
            <span>{{ '〈〈' }}</span>
          </a>
          <a class="page-btn prev" @click="onClickPrevPage">
            <span> {{ '〈' }} </span>
          </a>
        </div>
        <div class="page-box">
          <a
            v-for="i in lastPage"
            :class="{current: modelValue + 1 === i}"
            v-show="i >= firstPage"
            class="page-btn"
            :key="i"
            v-text="i"
            @click="onClickPage(i)"
          />
        </div>
        <div class="next-box" :style="activeStyle(isLastPaging)">
          <a class="page-btn next" @click="onClickNextPage">
            <span> {{ '〉' }} </span>
          </a>
          <a class="page-btn last-page-btn" v-if="isShowLastPage" @click="onClickLastPage">
              <span>
             {{ '〉〉' }}
              </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  size: {
    type: Number,
    default: 10,
  },
  totalPages: {
    type: Number,
    default: 10,
  },
  isShowFirstPage: {
    type: Boolean,
    default: false,
  },
  isShowLastPage: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['update:modelValue'])

const firstPage = computed(() => {
  return parseInt(props.modelValue / props.size, 10) * props.size + 1
})

const lastPage = computed(() => {
  const lastPageNumber = firstPage.value + props.size - 1
  return props?.totalPages >= lastPageNumber ? lastPageNumber : props?.totalPages
})

const isLastPaging = computed(() => {
  return (
    parseInt((props?.totalPages - 1) / props.size, 10) ===
    parseInt(props.modelValue / props.size, 10)
  )
})

const isFirstPaging = computed(() => {
  return parseInt(props.modelValue / props.size, 10) === 0
})

const activeStyle = val => {
  return val ? 'visibility: hidden' : 'visibility: visible'
}
const onClickFirstPage = () => {
  emit('update:modelValue', 0)
}
const onClickLastPage = () => {
  emit('update:modelValue', props.totalPages - 1)
}
const onClickPrevPage = () => {
  emit('update:modelValue', props.modelValue - props.size)
}
const onClickPage = page => {
  emit('update:modelValue', page - 1)
}

const onClickNextPage = () => {
  let result = firstPage.value-1 + props.size
  if (props.modelValue + props.size >= props.totalPages) {
    result = props.totalPages - 1
  }
  emit('update:modelValue', result)
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_pagination.scss'
</style>
