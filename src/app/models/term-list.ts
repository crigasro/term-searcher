import { TermItem } from './term-item';

export interface TermList {
  totalItems: number,
  endIndex: number,
  startIndex: number,
  itemsPerPage: number,
  items: TermItem[]
}
