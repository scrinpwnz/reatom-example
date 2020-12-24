import {declareAction} from "@reatom/core";

const prefix = "JSON_TREE"

export const refreshAction = declareAction(`${prefix}_REFRESH`)
export const toggleAction = declareAction(`${prefix}_TOGGLE`)