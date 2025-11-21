<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="header?.to || '/'"
  >
    <UContentSearchButton
      v-if="header?.search"
      :collapsed="false"
      class="w-full"
    />

    <template
      v-if="header?.logo?.dark || header?.logo?.light || header?.title"
      #title
    >
      <UColorModeImage
        v-if="header?.logo?.dark || header?.logo?.light"
        :light="header?.logo?.light!"
        :dark="header?.logo?.dark!"
        :alt="header?.logo?.alt"
        class="h-6 w-auto shrink-0"
      />

      <span v-else-if="header?.title">
        {{ header.title }}
      </span>
    </template>

    <template
      v-else
      #left
    >
      <NuxtLink :to="header?.to || '/'">
        <AppLogo class="w-auto h-9 shrink-0" />
      </NuxtLink>

      <UColorModeSwitch v-if="header?.colorMode" />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden"
        variant="outline"
        label="Search"
      />

      <UButton
        trailing-icon="i-lucide-layers-2"
        to="/"
        variant="subtle"
      >
        <span class="hidden sm:inline">
          Submit
          <span class="hidden md:inline">
            Design
          </span>
          <span class="hidden xl:inline">
            / Specification
          </span>
          <span class="hidden 2xl:inline">
            for Quote
          </span>
        </span>
      </UButton>

      <UButton
        icon="i-lucide-layers"
        to="/built"
        color="primary"
      >
        <span class="hidden sm:inline">
          Latest
          <span class="hidden 2xl:inline">
            Published
          </span>
          <span class="hidden xl:inline">
            Projects
          </span>
          <span class="hidden md:inline">
            Built
          </span>
        </span>
      </UButton>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
