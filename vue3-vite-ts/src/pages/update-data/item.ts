export class Item {
  constructor(
    public id: number,
    public name: string,
    public category: string[] = [],
  ) {}
}

export type ItemWithState = {
  item: Item,
  check: boolean
}
