import { createStore, combineReducers } from "redux";

// ===================
import reducer from "./Reducer";

const reducers = combineReducers({
  reducer: reducer,
});
// ===================

const rootReducer = (state, action) => {
  if (action.meta && action.meta.logout) {
    state = undefined;
  }
  return reducers(state, action);
};

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  );
  return store;
};

export default configureStore({});
