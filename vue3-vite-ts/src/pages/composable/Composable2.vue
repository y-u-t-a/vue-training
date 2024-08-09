<script setup lang="ts">
import { useStore } from "./../../composable/store"

const { state } = useStore()
</script>

<template>
  <h1>コンポーザブル（参照）</h1>
  <h3>現在の state の値</h3>
  <div style="white-space: pre-wrap;">
    {{ JSON.stringify(state, null, 4) }}
  </div>
  <RouterLink to="/composable">state の更新ページ</RouterLink>
</template>
