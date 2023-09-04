<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const users = ref<string[] | null>(null)

function loading() {
  return users.value === null
}
function empty() {
  return users.value !== null && users.value.length === 0
}

// setup で API呼び出しするときは onBeforeMount 内で行う
onBeforeMount(async () => {
  await new Promise(e => setTimeout(e, 2000)) // 状態遷移を確認するためにあえて遅らせる
  const res = await fetch("/users")
  const resJson = await res.json()
  users.value = resJson.users
})

</script>

<template>
  <h1>API 呼び出し</h1>
  <p>API は Mock Service Worker: MSW を使ってセットアップしている。</p>
  <br>
  <p v-if="loading()">ロード中...</p>
  <p v-else-if="empty()">0件</p>
  <p v-else>API呼び出し結果: {{ users }}</p>
</template>