import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import chcondReducer from "./search/reducer";


const reducers = combineReducers({
    search: searchReducer,
    chcond: chcondReducer
})

export default reducers;