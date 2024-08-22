export class Item {
  constructor(
    public id: number,
    public name: string,
    public category: string[] = [],
    public recommendItems: RecommendItem[] = [],
  ) {}
}

export type RecommendItem = {
  id: number,
  name: string,
}

export type ItemWithState = {
  item: Item,
  check: boolean
}
