import {declareAtom, map} from "@reatom/core";
import {IMarketItem, IState} from "./interfaces";
import {generateMarketItems} from "../../../mock";
import {deleteFromCartAction, moveToCartAction, setTabAction} from "./actions";

const initialState: IState = {
  tab: 'market',
  /** Создание моковых данных */
  marketItems: generateMarketItems(8),
  itemsInCart: []
}

/** Атом маркета, корзина выполнена в виде массива UUID(string[]) */
export const marketAtom = declareAtom(
  "market",
  initialState,
  on => [
    on(setTabAction, (state, payload) => ({
      ...state,
      tab: payload
    })),
    on(moveToCartAction, (state, payload) => ({
      ...state,
      itemsInCart: [...state.itemsInCart, payload]
    })),
    on(deleteFromCartAction, (state, payload) => ({
      ...state,
      itemsInCart: state.itemsInCart.filter(item => item !== payload)
    }))
  ]
)

/** Атом, полученный с помощью функции map. Корзина собрана с помощью данных атома marketAtom,
 * но здесь уже это не массив UUID, а массив IMarketItem
 */
export const cartAtom = map(
  "cart",
  marketAtom,
  state => {
    const result: IMarketItem[] = []
    state.marketItems.forEach(item => {
      if (state.itemsInCart.includes(item.uuid)) {
        result.push(item)
      }
    })
    return result
  }
)