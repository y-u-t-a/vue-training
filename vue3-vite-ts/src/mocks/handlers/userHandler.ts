import { http, HttpResponse } from 'msw'

export const userHandler = http.get('/users', () => {
  return HttpResponse.json({
    users: ["a", "b", "c"]
  })
})