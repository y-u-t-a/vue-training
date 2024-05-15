<script setup lang="ts">
import { ItemWithState } from './item'
import GrandChild from './GrandChild.vue'

const modelValue = defineModel<ItemWithState>('item', {
  required: true
})

</script>

<template>
  <VRow>
    <VCol>
      <VCheckbox
        v-model="modelValue.check"
        :label="modelValue.item.name"
      />
    </VCol>
    <VCol>
      <h3>孫コンポーネント</h3>
      <GrandChild :item="modelValue.item" v-bind="$attrs"/>
    </VCol>
  </VRow>
</template>