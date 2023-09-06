<script setup lang="ts">
import { ref, watch } from 'vue'
import { Item } from './item'

const props = defineProps<{
  item: Item,
}>()
const emits = defineEmits<{
  changeCategory: [item: Item, category: string[]]
}>()

const category = ref(props.item.category.join(", "))

watch(props, (newValue) => {
  category.value = newValue.item.category.join(", ")
})

function onChange() {
  const newCategory = category.value
    .split(",")
    .map(s => s.trim())
    .filter(s => s.length > 0)
  emits("changeCategory", props.item, newCategory)
}
</script>

<template>
  <v-text-field
    v-model="category"
    @change="onChange"
  />
</template>