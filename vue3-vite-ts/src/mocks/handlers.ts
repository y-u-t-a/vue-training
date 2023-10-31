import { rest } from 'msw'
import { items } from './items'

export const handlers = [
  rest.get('/users', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: ["a", "b", "c"]
      })
    )
  }),
  rest.get('/item', (req, res, ctx) => {
    const { name, year } = Object.fromEntries(req.url.searchParams)
    const response = items.filter(item => {
      return item.name.includes(name || "") && item.year.toString().includes(year || "")
    })
    return res(
      ctx.status(200),
      ctx.json(response)
    )
  }),
]
