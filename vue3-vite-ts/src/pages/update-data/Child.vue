<script setup lang="ts">
import { ItemWithState } from './item'
import GrandChild from './GrandChild.vue'
import GrandChild2 from './GrandChild2.vue'

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
        :category="modelValue.item.category"
        @change-category="changeCategory"
      />
      <GrandChild2
        v-model="modelValue.item.recommendItems"
      />
    </VCol>
  </VRow>
</template>