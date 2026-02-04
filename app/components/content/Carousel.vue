<script setup lang="ts">
import type { PropType } from 'vue'

interface CarouselItem {
  src: string
  alt?: string
}

defineProps({
  items: {
    type: Array as PropType<(string | CarouselItem)[]>,
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
    default: true
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

const normalizeItem = (item: string | CarouselItem) => {
  if (typeof item === 'string') {
    return { src: item, alt: 'Gallery image' }
  }
  return item
}
</script>

<template>
  <div
    class="w-full overflow-hidden"
  >
    <UCarousel
      v-slot="{ item }"
      :loop="loop"
      :arrows="arrows"
      :dots="dots"
      :autoplay="autoplay ? { delay } : false"
      auto-scroll
      :items="items"
      :ui="{ item: 'basis-auto' }"
    >
      <img
        :src="normalizeItem(item).src"
        :alt="normalizeItem(item).alt"
        class="mt-8 h-[400px] md:h-[600px] rounded-lg object-cover object-center"
      />
    </UCarousel>
  </div>
</template>
