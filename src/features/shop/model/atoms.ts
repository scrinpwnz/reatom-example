import {declareAtom} from "@reatom/core";
import {IState} from "./interfaces";

const initialState: IState = {
  tab: 'shop'
}

export const shopAtom = declareAtom(
  "shop",
  initialState,
  on => []
)