import { rest } from 'msw'

export const handlers = [
  rest.get('/users', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: ["a", "b", "c"]
      })
    )
  }),
]
