<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  category: string[],
}>()
const emits = defineEmits<{
  changeCategory: [category: string[]]
}>()

const category = computed({
  get: () => props.category.join(", "),
  set: (value) => {
    const newCategory = value
      .split(/,|\s/)
      .map(s => s.trim())
      .filter(s => s.length > 0)
    emits("changeCategory", newCategory)
  }
})
</script>

<template>
  <span>カテゴリ</span>
  <v-text-field
    v-model="category"
  />
</template>