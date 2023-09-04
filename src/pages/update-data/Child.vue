<script setup lang="ts">
import { ref, watch } from 'vue'
import { Item } from './item'

const props = defineProps<{
  item: Item,
  check: boolean,
}>()
const emits = defineEmits<{
  changeCheckState: [item: Item, check: boolean]
}>()

const check = ref(props.check)

watch(props, (newValue) => {
  check.value = newValue.check
})

function onChange() {
  emits("changeCheckState", props.item, check.value)
}
</script>

<template>
  <VCheckbox
    v-model="check"
    :label="props.item.name"
    @change="onChange"
  />
</template>