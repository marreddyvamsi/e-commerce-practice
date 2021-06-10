import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import filterReducer from "./filterReducer";
import rootSaga from "../sagas/rootSaga";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  filterReducer,
  cartReducer,
  productsReducer,
});
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : (f) => f
  )
);
sagaMiddleware.run(rootSaga);

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : (f) => f
//   )
// );
