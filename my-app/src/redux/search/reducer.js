import {
    SET_SEARCH,
    SET_CHCOND,
} from "./types"
import initialState from "./state"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH: {
            return action.payload;
        }
        case SET_CHCOND: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default reducer;