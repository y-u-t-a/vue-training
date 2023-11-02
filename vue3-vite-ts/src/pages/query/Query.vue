<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Item } from '../../mocks/items'

const name = ref("")
const year = ref("")
const response = ref<Item[] | null>(null)
const router = useRouter()
const route = useRoute()

watchEffect(async () => {
  name.value = route.query.name as string || ""
  year.value = route.query.year as string || ""
  const query = new URLSearchParams(location.search)
  const res = await fetch(`/item?${query.toString()}`)
  response.value = await res.json()
})

function search() {
  const query: Record<string, string> = {}
  if (name.value) query.name = name.value
  if (year.value) query.year = year.value
  router.push({ query })
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
