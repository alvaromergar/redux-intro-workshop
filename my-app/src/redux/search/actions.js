import {
    SET_FILTER,
    SET_CHCOND,
} from "./types"

export const setFilter = (value) => ({ type: SET_FILTER, payload: value});
export const setChCond = (value) => ({ type: SET_CHCOND, payload: value});