<script setup lang="ts">
import { ref, watch } from 'vue'
import { Item } from './item'
import GrandChild from './GrandChild.vue'

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
  <VRow>
    <VCol>
      <VCheckbox
        v-model="check"
        :label="props.item.name"
        @change="onChange"
      />
    </VCol>
    <VCol>
      <h3>孫コンポーネント</h3>
      <GrandChild :item="item" v-bind="$attrs"/>
    </VCol>
  </VRow>
</template>