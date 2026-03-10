<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  items: {
    type: Array as PropType<(string[])>,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 3000
  },
  arrows: {
    type: Boolean,
    default: false
  },
  dots: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  }
})

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="flex-1 w-full">
    <UCarousel
      ref="carousel"
      v-slot="{ item }"
      :arrows="arrows"
      auto-scroll
      :items="items"
      :prev="{ onClick: onClickPrev }"
      :next="{ onClick: onClickNext }"
      class="w-full mx-auto"
      :ui="{ item: 'basis-auto' }"
      @select="onSelect"
    >
      <img :src="item" class="mt-8 w-full h-[600px] md:h-[800px] rounded-lg object-cover object-center">
    </UCarousel>

    <div class="flex h-14 md:h-25 justify-between gap-1 pt-3 mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex opacity-25 hover:opacity-100 transition-opacity"
        :class="{ 'opacity-100': activeIndex === index }"
        @click="select(index)"
      >
        <img :src="item" class="w-full rounded-lg">
      </div>
    </div>
  </div>
</template>

