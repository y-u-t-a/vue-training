<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { Users, getUsers, useFetchUsers } from './users'

const users = ref<Users | null>(null)

const { isFetching, data, execute } = useFetchUsers()

function loading() {
  return users.value === null
}
function empty() {
  return users.value !== null && users.value.users.length === 0
}

// setup で API呼び出しするときは onBeforeMount 内で行う
onBeforeMount(async () => {
  await new Promise(e => setTimeout(e, 2000)) // 状態遷移を確認するためにあえて遅らせる
  users.value = await getUsers()
})
</script>

<template>
  <h1>API 呼び出し</h1>
  <p>API は Mock Service Worker: MSW を使ってセットアップしている。</p>
  <br>
  <p v-if="loading()">ロード中...</p>
  <p v-else-if="empty()">0件</p>
  <p v-else>API呼び出し結果: {{ users }}</p>
  <h2> useFetch版</h2>
  <VBtn @click="execute()">API呼び出し</VBtn>
  <VBtn @click="data = null">リセット</VBtn>
  <p>API呼び出し結果: {{ isFetching ? "ロード中..." : data }}</p>
  <p>一つ目の要素: {{ data?.users?.[0] }}</p>
</template>