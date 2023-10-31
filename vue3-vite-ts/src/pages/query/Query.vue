<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Item } from '../update-data/item';

const name = ref("")
const year = ref("")
const response = ref<Item[] | null>(null)
const router = useRouter()
const route = useRoute()

watchEffect(async () => {
  name.value = route.query.name as string || ""
  year.value = route.query.year as string || ""
  const params = new URLSearchParams(location.search)
  const res = await fetch(`/item?${params.toString()}`)
  response.value = await res.json()
})

function search() {
  const params: Record<string, string> = {}
  if (name) params.name = name.value
  if (year) params.year = year.value
  router.push({ query: params })
}
</script>

<template>
  <h1>クエリ</h1>
  <VForm @submit.prevent="search">
    <VTextField v-model="name" label="name"></VTextField>
    <VTextField v-model="year" label="year"></VTextField>
    <VBtn type="submit">検索</VBtn>
  </VForm>
  {{ response }}
</template>
