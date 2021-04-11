import { Item } from './'

export type Feed = {
  title: string
  link: string
  description: string
  modified: string
  generator: string
  items: Item[]
  }
