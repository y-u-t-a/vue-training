<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "./../../composable/store"
import { VBtn, VForm, VTextField } from "vuetify/components";

const { state, setState } = useStore()

const form = ref({
  key: "",
  key2: "",
})

function submit() {
  setState(form.value)
}
</script>

<template>
  <h1>コンポーザブル</h1>
  <h3>state の更新</h3>
  <VForm @submit.prevent="submit" class="d-flex">
    <VTextField
      type="text"
      v-model="form.key"
      hide-details
      label="key"
    />
    <VTextField
      type="text"
      v-model="form.key2"
      hide-details
      label="key2"
    />
    <VBtn type="submit" class="align-self-center">更新</VBtn>
  </VForm>
  <h3>現在の state の値</h3>
  <div style="white-space: pre-wrap;">
    {{ JSON.stringify(state, null, 4) }}
  </div>
  <RouterLink to="/composable2">他のページで state の値を確認</RouterLink>
</template>
