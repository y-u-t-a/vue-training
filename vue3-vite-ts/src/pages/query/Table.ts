import { VDataTable } from 'vuetify/lib/labs/components.mjs'

type Headers = InstanceType<typeof VDataTable>['headers']
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