<script setup lang="ts">
import { computed } from 'vue'
import { Item } from './item'

const props = defineProps<{
  item: Item,
}>()
const emits = defineEmits<{
  changeCategory: [item: Item, category: string[]]
}>()

const category = computed({
  get: () => props.item.category.join(", "),
  set: (value) => {
    const newCategory = value
      .split(/,|\s/)
      .map(s => s.trim())
      .filter(s => s.length > 0)
    emits("changeCategory", props.item, newCategory)
  }
})
</script>

<template>
  <v-text-field
    v-model="category"
  />
</template>