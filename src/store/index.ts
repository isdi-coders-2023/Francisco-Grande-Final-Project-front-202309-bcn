import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { bikesReducer } from "./features/bikes/bikesSlice";
import { uiReducer } from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    bikesState: bikesReducer,
    uiState: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
