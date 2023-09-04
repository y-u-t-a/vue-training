import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import UpdateData from './pages/update-data/UpdateData.vue'
import CallApi from './pages/call-api/CallApi.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    meta: {
      title: "ホーム"
    }
  },
  {
    path: '/update-data',
    component: UpdateData,
    meta: {
      title: "コンポーネント間のデータ更新"
    }
  },
  {
    path: '/call-api',
    component: CallApi,
    meta: {
      title: "API 呼び出し"
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
