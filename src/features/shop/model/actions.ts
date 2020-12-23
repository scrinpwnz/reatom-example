import {declareAction} from "@reatom/core";
import {Tab} from "./interfaces";

const prefix = "SHOP"

export const setTabAction = declareAction<Tab>(`${prefix}_SET_TAB`)