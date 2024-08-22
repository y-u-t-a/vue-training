<script setup lang="ts">
import { RecommendItem } from './item'

const model = defineModel<Partial<RecommendItem>[]>({ required: true })

function addRecommend() {
  model.value.push({})
}

function removeRecommend(index: number) {
  model.value = model.value.filter((_, i) => i !== index)
}
</script>

<template>
  <div v-for="(_, index) in model">
    <span>レコメンド {{ index + 1 }}</span>
    <div class="d-flex">
      <v-text-field v-model="model[index].id" />
      <v-text-field v-model="model[index].name" />
      <VBtn @click="removeRecommend(index)">削除</VBtn>
    </div>
  </div>
  <VBtn @click="addRecommend">追加</VBtn>
</template>