import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import clickSlice from "./cardState";
  import postSlice from "./ducks/postSlice";
  
  const reducer = combineReducers({
    clickReducer: clickSlice,
    postReducer: postSlice
  });
  
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false })]
  });
  
  export default store;
  