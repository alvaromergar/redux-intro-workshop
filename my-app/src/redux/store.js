import { createStore, compose } from "redux";

import CombineReducers  from "./reducers";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = compose(devTools);
const store = createStore(CombineReducers, appliedMiddleware);

export default store;