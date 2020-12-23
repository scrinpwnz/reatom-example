import {declareAtom} from "@reatom/core";
import {setTabAction} from "./actions";
import {IState} from "./interfaces";

const initialState: IState = {}

export const navigationAtom = declareAtom(
  'navigation',
  initialState,
  on => [
    on(setTabAction, (state, payload) => ({
      ...state,
      tab: payload
    }))
  ]
)