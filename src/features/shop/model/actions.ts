import {declareAction} from "@reatom/core";
import {Tab} from "./interfaces";

const prefix = "SHOP"

export const setTabAction = declareAction<Tab>(`${prefix}_SET_TAB`)
export const moveToCartAction = declareAction<string>(`${prefix}_MOVE_TO_CART`)
export const deleteFromCartAction = declareAction<string>(`${prefix}_DELETE_FROM_CART`)