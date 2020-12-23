import {declareAction} from "@reatom/core";
import {getRandomIntInclusive, sleep} from "../../../helpers";
import {IGetRandomDonePayload} from "./interfaces";

const prefix = "COUNTER"

export const incrementAction = declareAction(`${prefix}_INCREMENT`);
export const decrementAction = declareAction(`${prefix}_DECREMENT`);
export const getRandomDoneAction = declareAction<IGetRandomDonePayload>(
  `${prefix}_GET_RANDOM_DONE`
);

export const getRandomAction = declareAction<number>(
  `${prefix}_GET_RANDOM`,
  async (payload, {dispatch}) => {
  await sleep(2000)
  dispatch(getRandomDoneAction({
    counter: getRandomIntInclusive(-100, 100),
    loadingIndex: payload
  }));
});