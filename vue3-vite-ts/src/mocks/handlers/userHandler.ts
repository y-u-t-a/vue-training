import { rest } from 'msw' // mswのrestをインポートします。

export const userHandler = rest.get('/users', (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      users: ["a", "b", "c"]
    })
  )
})