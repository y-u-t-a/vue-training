import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import UpdateData from './pages/update-data/UpdateData.vue'
import CallApi from './pages/call-api/CallApi.vue'
import Composable from './pages/composable/Composable.vue'
import Composable2 from './pages/composable/Composable2.vue'
import Filter from './pages/filter/Filter.vue'
import Query from './pages/query/Query.vue'

type RouteMeta = {
  title: string,
}

type ExtendedRouteRecordRaw = RouteRecordRaw & {
  meta: RouteMeta,
}

export const routes: ExtendedRouteRecordRaw[] = [
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
    path: '/composable',
    component: Composable,
    meta: {
      title: "コンポーザブル（更新）"
    }
  },
  {
    path: '/composable2',
    component: Composable2,
    meta: {
      title: "コンポーザブル（参照）"
    }
  },
  {
    path: '/call-api',
    component: CallApi,
    meta: {
      title: "API 呼び出し"
    }
  },
  {
    path: '/filter',
    component: Filter,
    meta: {
      title: "フィルター"
    }
  },
  {
    path: '/query',
    component: Query,
    meta: {
      title: "クエリ"
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
