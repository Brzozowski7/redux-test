import {
    configureStore,
    combineReducers,
  } from "@reduxjs/toolkit";
  import dataSliceReducer from "./slices/dataSlice";
  
  const rootReducer = combineReducers({
    data: dataSliceReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  
  export function setupStore(preloadedState) {
    return configureStore({
      reducer: rootReducer,
      preloadedState,
    });
  }
  
  export default store;