<script setup lang="ts">
import { UCard } from '#components'

defineProps<{
  reverse?: boolean
  card?: boolean
}>()
</script>

<template>
  <component :is="card ? UCard : 'div'">
    <div class="grid grid-cols-1 lg:grid-cols-3 items-center w-full gap-y-6 lg:gap-x-8">
      <div :class="{ 'lg:order-2': reverse }" class="w-full">
        <slot name="image" />
      </div>
      <div class="w-full lg:col-span-2">
        <slot />
      </div>
    </div>
  </component>
</template>
