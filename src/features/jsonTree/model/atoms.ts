import {declareAtom} from "@reatom/core";
import {refreshAction} from "./actions";

export const jsonTreeAtom = declareAtom(
  'jsonTreeRefresher',
  false,
  on => [
    on(refreshAction, state => !state)
  ]
)