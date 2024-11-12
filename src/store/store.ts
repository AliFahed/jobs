import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import salaryCategoryReducer from "./salaryCategorySlice";
import headerActiveLinkReducer from "./HeaderActiveLinkSlice";

export const store = configureStore({
  reducer: {
    headerLink: headerActiveLinkReducer,
    job: categoryReducer,
    salary: salaryCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
