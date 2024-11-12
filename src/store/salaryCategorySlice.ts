import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SalaryCategoryState {
  selectedSalaryCategory: string;
}

const initialSalaryState: SalaryCategoryState = {
  selectedSalaryCategory: "frontend",
};

const salaryCategorySlice = createSlice({
  name: "salaryCategory",
  initialState: initialSalaryState,
  reducers: {
    setSalaryCategory: (state, action: PayloadAction<string>) => {
      state.selectedSalaryCategory = action.payload;
    },
  },
});

export const { setSalaryCategory } = salaryCategorySlice.actions;
export default salaryCategorySlice.reducer;
