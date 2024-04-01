import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tripsReducer } from "./tripSlice";
import { selectedTripReducer } from "./selectedTripSlice";
import { userReducer } from "./userSlice";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["trips", "selectedTrip"],
};

const rootReducer = combineReducers({
  trips: tripsReducer,
  selectedTrip: selectedTripReducer,
  user: userReducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
