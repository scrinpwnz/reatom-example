import {declareAction} from "@reatom/core";

const prefix = "NAVIGATION"

export const setTabAction = declareAction<string>(`${prefix}_SET_TAB`)