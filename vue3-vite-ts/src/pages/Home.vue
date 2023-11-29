<script setup lang="ts">
import { routes } from '../router'

const menu = routes.filter(r => r.path !== "/")
</script>

<template>
  <h1>Vue の練習</h1>
  <VList>
    <VListItem v-for="route in menu">
      ・
      <RouterLink :to="route.path">{{ route.meta?.title }}</RouterLink>
    </VListItem>
  </VList>
</template>