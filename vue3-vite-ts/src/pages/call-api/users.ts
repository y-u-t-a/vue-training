import { set, useFetch } from "@vueuse/core"

export type Users = {
  users: string[]
}

export async function getUsers(): Promise<Users> {
  const res = await fetch("/users")
  const resJson = await res.json()
  return {
    users: resJson.users
  }
}

export const useFetchUsers = () => useFetch("/users", {
  immediate: false,
  beforeFetch: async () => {
    await new Promise(e => setTimeout(e, 2000))
  }
}).get()
