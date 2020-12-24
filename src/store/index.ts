import {combine, createStore} from "@reatom/core";
import {counterAtom} from "../features/counter/model";
import {connectReduxDevtools} from "@reatom/debug";
import {navigationAtom} from "../features/navigation/model";
import {jsonTreeAtom} from "../features/jsonTree/model";
import {cartAtom, marketAtom} from "../features/shop/model";

const rootAtom = combine([
  navigationAtom,
  counterAtom,
  cartAtom,
  marketAtom,
  jsonTreeAtom
])

export const store = createStore(rootAtom)
connectReduxDevtools(store)