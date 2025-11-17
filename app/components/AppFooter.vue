<script setup lang="ts">
const columns = [{
  label: 'SURVEY',
  children: [{
    label: 'Probes & Investigations'
  }, {
    label: 'Existing Conditions Documentation'
  }]
}, {
  label: 'DESIGN',
  children: [{
    label: 'Permits & Estimates'
  }, {
    label: '2D Blueprints & 3D Renderings'
  }]
}, {
  label: 'BUILD',
  children: [{
    label: 'Structural, Waterproofing, Mechanical, Electrical, Plumbing'
  }, {
    label: 'Wood, Stone, Tile, Drywall, Plaster & Paint'
  }]
}]
</script>

<template>
  <USeparator
    color="primary"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <div class="text-right">
              Call (212) 327-1666<br>
              Fax: (212) 327-1664<br>
              contact@empirecitynyc.com<br>
              206 E 67th st, 66 - New York, NY 10065
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        Website Built with Nuxt UI
      </p>
    </template>

    <template #right>
      <p class="text-muted text-sm">
        EMPIRE CITY CONSTRUCTION
      </p>
    </template>
  </UFooter>
</template>
