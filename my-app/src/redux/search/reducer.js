import {
    SET_FILTER,
} from "./types"
import initialState from "./state"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default reducer;