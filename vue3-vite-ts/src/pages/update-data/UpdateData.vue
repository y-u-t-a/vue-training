<script setup lang="ts">
import { ref, computed } from 'vue'

import Child from './Child.vue'
import { Item } from './item'

type ItemWithState = {
  item: Item,
  check: boolean
}

const items = ref<ItemWithState[]>([
  { item: new Item(1, "item1"), check: false },
  { item: new Item(2, "item2"), check: false },
  { item: new Item(3, "item3"), check: false },
])

const noSelectedItem = computed(() => {
  return items.value.filter(i => i.check).length === 0
})

function selectAll() {
  items.value = items.value.map(i => {
    i.check = true
    return i
  })
}
function clearAll() {
  items.value = items.value.map(i => {
    i.check = false
    return i
  })
}
function deleteItem() {
  items.value = items.value.filter(i => !i.check)
}
function addItem() {
  const idList = items.value.map(i => i.item.id)
  const id = Math.max(...idList, 0) + 1 // 0件の場合も考慮
  items.value.push(
    { item: new Item(id, `item${id}`), check: false }
  )
}
function changeCheckState(item: Item, check: boolean) {
  items.value.forEach(i => {
    if (i.item.id === item.id) {
      i.check = check
    }
  })
}

function changeCategory(item: Item, category: string[]) {
  items.value.forEach(i => {
    if (i.item.id === item.id) {
      i.item.category = category
    }
  })
}
</script>

<template>
  <h1>コンポーネント間のデータの更新</h1>
  <VRow>
    <VCol>
      <h2>親コンポーネント</h2>
      <VBtn size="small" @click="selectAll">全選択</VBtn>
      <VBtn size="small" @click="clearAll">クリア</VBtn>
      <VBtn size="small" color="red" @click="deleteItem" :disabled="noSelectedItem">削除</VBtn>
      <VBtn size="small" color="blue" @click="addItem">追加</VBtn>
      <div style="white-space: pre-wrap;">{{ JSON.stringify(items, null, 2) }}</div>
    </VCol>
    <VCol class="mt-10">
      <h2>子コンポーネント</h2>
      <div v-for="item in items">
        <Child
          :item="item.item"
          :check="item.check"
          @changeCheckState="changeCheckState"
          @changeCategory="changeCategory"
        ></Child>
      </div>
    </VCol>
  </VRow>
</template>
