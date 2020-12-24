import {IMarketItem} from "./IMarketItem";

export interface IState {
  tab: Tab
  marketItems: IMarketItem[]
  itemsInCart: string[]
}

export type Tab = 'market' | 'cart'