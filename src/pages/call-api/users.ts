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