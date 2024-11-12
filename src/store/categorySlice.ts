import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedJobCategory: string;
}

const initialState: CategoryState = {
  selectedJobCategory: "frontend",
};

const categorySlice = createSlice({
  name: "jobCategory",
  initialState,
  reducers: {
    setJobCategory: (state, action: PayloadAction<string>) => {
      state.selectedJobCategory = action.payload;
    },
  },
});

export const { setJobCategory } = categorySlice.actions;
export default categorySlice.reducer;
