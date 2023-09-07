<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Details page')

useHead({
  title: 'Personal 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV2 />
  </div>
</template>
