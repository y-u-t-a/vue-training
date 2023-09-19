import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/Home.vue"
import UpdateData from "./pages/update-data/UpdateData.vue"

Vue.use(VueRouter)

export const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "ホーム"
    }
  },
  {
    path: "/update-data",
    component: UpdateData,
    meta: {
      title: "コンポーネント間のデータ更新"
    }
  },
]

export const router = new VueRouter({
  mode: "history",
  routes: routes,
})
