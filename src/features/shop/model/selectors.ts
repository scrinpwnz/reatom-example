import {IState} from "./interfaces";

export const tabSelector = (state: IState) => state.tab
export const marketItemsSelector = (state: IState) => state.marketItems
export const itemsInCartSelector = (state: IState) => state.itemsInCart
export const itemsInCartCountSelector = (state: IState) => state.itemsInCart.length

