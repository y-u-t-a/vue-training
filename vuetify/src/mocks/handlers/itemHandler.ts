import { http, HttpResponse } from 'msw'

export const itemHandler = http.get('/item', ({ request }) => {
  const { name, year } = Object.fromEntries(new URL(request.url).searchParams)
  const response = items.filter(item => {
    return item.name.includes(name || "") && item.year.toString().includes(year || "")
  })
  return HttpResponse.json(response)
})

export type Item = {
  name: string,
  year: number,
}

const items: Item[] = [
  { name: "AAA", year: 1999 },
  { name: "BBB", year: 2000 },
  { name: "CCC", year: 2001 },
  { name: "DDD", year: 2002 },
  { name: "DDA", year: 2003 },
  { name: "DDB", year: 2004 },
  { name: "DDC", year: 2005 },
  { name: "DDE", year: 2006 },
  { name: "DDF", year: 2007 },
  { name: "DDG", year: 2008 },
  { name: "DDH", year: 2009 },
  { name: "DDI", year: 2010 },
  { name: "DDJ", year: 2011 },
  { name: "DDK", year: 2012 },
  { name: "DDL", year: 2013 },
  { name: "DDM", year: 2014 },
  { name: "DDN", year: 2015 },
  { name: "DDO", year: 2016 },
  { name: "DDP", year: 2017 },
  { name: "DDQ", year: 2018 },
  { name: "DDR", year: 2019 },
  { name: "DDS", year: 2020 },
  { name: "DDT", year: 2021 },
]