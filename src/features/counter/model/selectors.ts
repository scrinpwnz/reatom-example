import {IState} from "./interfaces";

export const counterSelector = (state: IState) => state.counter
export const loadingSelector = (state: IState) => state.loading
