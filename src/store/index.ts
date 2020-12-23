import {createStore} from "@reatom/core";
import {counterAtom} from "../features/counter/model";
import {connectReduxDevtools} from "@reatom/debug";

export const store = createStore(counterAtom)
connectReduxDevtools(store)