import {declareAtom} from "@reatom/core";
import {decrementAction, getRandomAction, getRandomDoneAction, incrementAction} from "./actions";
import {IState} from "./interfaces";

const initialState: IState = {
  counter: 0,
  loading: [false, false, false]
}

export const counterAtom = declareAtom(
  "counter",
  initialState,
  on => [
    on(incrementAction, (state) => {
      state.counter++
      return {...state}
    }),

    on(decrementAction, (state) => {
      state.counter--
      return {...state}
    }),

    on(getRandomAction, (state, payload) => {
      state.loading[payload] = true
      return {
        ...state,
        loading: [...state.loading]
      }
    }),

    on(getRandomDoneAction, (state, {counter, loadingIndex}) => {
      state.counter = counter
      state.loading[loadingIndex] = false
      return {
        ...state,
        loading: [...state.loading]
      }
    })
  ])