import {declareAtom} from "@reatom/core";
import {refreshAction, toggleAction} from "./actions";

const initialState = {
  hidden: true,
  refresh: 0
}

export const jsonTreeAtom = declareAtom(
  'jsonTree',
  initialState,
  on => [
    on(refreshAction, state => ({
      ...state,
      refresh: ++state.refresh
    })),
    on(toggleAction, state => ({
      ...state,
      hidden: !state.hidden
    }))
  ]
)