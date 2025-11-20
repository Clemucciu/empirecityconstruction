<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()

const { data: page } = await useAsyncData('built', () => queryCollection('built').first())
const { data: versions } = await useAsyncData(route.path, () => queryCollection('versions').order('date', 'DESC').all())

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
    <div class="w-full h-[630px]" sizes="100vw">
      <UColorModeImage
        class="w-full h-full object-cover object-center rounded-lg overflow-hidden"
        light="/W_Hotel-225_River_St/W_17.jpg"
        dark="/W_Hotel-225_River_St/W_55.jpg"
      />
    </div>

    <UPage>
      <UPageHeader
        v-bind="page"
        class="py-[50px]"
      />

      <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
        >
          <template>
            <div class="hover">
              <ContentRenderer :value="version.body" />
            </div>
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
      </UPageBody>

      <UPageAside>
        <UContentNavigation
          highlight
          :navigation="navigation"
        />
      </UPageAside>
    </UPage>
  </UContainer>
</template>
