<script setup lang="ts">
import { computed } from 'vue'
import { Item } from './item'
import GrandChild from './GrandChild.vue'

const props = defineProps<{
  item: Item,
  check: boolean,
}>()
const emits = defineEmits<{
  changeCheckState: [item: Item, check: boolean]
}>()

const check = computed({
  get: () => props.check,
  set: (value) => emits("changeCheckState", props.item, value)
})
</script>

<template>
  <VRow>
    <VCol>
      <VCheckbox
        v-model="check"
        :label="props.item.name"
      />
    </VCol>
    <VCol>
      <h3>孫コンポーネント</h3>
      <GrandChild :item="item" v-bind="$attrs"/>
    </VCol>
  </VRow>
</template>