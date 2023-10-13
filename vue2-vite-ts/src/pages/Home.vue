<script setup lang="ts">
import { routes } from '../router'

const menu = routes.filter(r => r.path !== "/")
</script>

<template>
  <div>
    <h1>Vue の練習（Vue 2.7）</h1>
    <ul>
      <li v-for="route in menu" :key="route.path">
        <RouterLink :to="route.path">{{ route.meta?.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
