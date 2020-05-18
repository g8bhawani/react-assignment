import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducer";

let middlewares = [thunkMiddleware];
if (process.env.REACT_APP_NODE_ENV === "staging") {
  middlewares = [...middlewares, logger];
}
export default createStore(reducer, applyMiddleware(...middlewares));
