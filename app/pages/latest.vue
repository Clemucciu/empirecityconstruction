<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()
const today = new Date();

const { data: page } = await useAsyncData('latest', () => queryCollection('latest').first())
const { data: docs } = await useAsyncData(route.path, () => queryCollection('docs').where('date', '<', today).order('date', 'DESC').all())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
defineOgImageComponent('Docs')
</script>

<template>
  <UContainer>
    <div class="w-full h-[630px]">
      <UColorModeImage
        class="w-full h-full object-cover object-center rounded-lg overflow-hidden"
        light="/2. W Hotel - 225 River St/W_17.jpg"
        dark="/2. W Hotel - 225 River St/W_55.jpg"
      />
    </div>

    <UPageHeader
        v-bind="page"
        class="py-[50px]"
    />

    <UPageBody>
        <UChangelogVersions>
            <UChangelogVersion
                v-for="(version, index) in docs?.filter(v => v.date)"
                :key="index"
                v-bind="version"
                :to="version.path"
            >
            </UChangelogVersion>
        </UChangelogVersions>
    </UPageBody>
  </UContainer>
</template>
