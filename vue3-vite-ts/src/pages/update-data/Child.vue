<script setup lang="ts">
import { ItemWithState } from './item'
import GrandChild from './GrandChild.vue'

const modelValue = defineModel<ItemWithState>('item', {
  required: true
})

function changeCategory(category: string[]) {
  modelValue.value.item.category = category
}

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
      <GrandChild
        :item="modelValue.item"
        @change-category="changeCategory"
      />
    </VCol>
  </VRow>
</template>