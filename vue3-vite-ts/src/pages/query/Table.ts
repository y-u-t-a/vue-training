import { ref } from 'vue'
import { VDataTable } from 'vuetify/lib/labs/components.mjs'

type Headers = InstanceType<typeof VDataTable>['headers']
type SortBy = InstanceType<typeof VDataTable>['sortBy']

export const headers: Headers = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "year",
    title: "Year",
  },
]

export const page = ref(1)
export const itemsPerPage = ref(10)
export const sortBy = ref<SortBy>([{ key: "name", order: 'asc' }])
