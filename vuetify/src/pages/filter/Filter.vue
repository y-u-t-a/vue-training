<script setup lang="ts">
import { ref, watch } from "vue"
import { getDesserts } from "./desserts"

const desserts = ref(getDesserts())
const filter = ref("")

// リアルタイムでフィルタリングする場合は watch を使う
watch(filter, (newValue) => {
  desserts.value = getDesserts().filter(
    d => d.name.includes(newValue)
    || d.calories.toString().includes(newValue)
  )
})
</script>

<template>
  <VTable>
    <template #top>
      <VLabel>フィルター</VLabel>
      <VTextField v-model="filter"/>
      <p>件数: {{ desserts.length }}</p>
    </template>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="desserts.length === 0">
        <td>データがありません。</td>
      </tr>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </VTable>
</template>
