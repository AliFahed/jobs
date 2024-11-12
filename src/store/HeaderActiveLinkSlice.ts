import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderActiveLinkState {
  selectedHeaderLink: string;
}

const initialLinkState: HeaderActiveLinkState = {
  selectedHeaderLink: "Jobs",
};

const HeaderActiveLinkSlice = createSlice({
  name: "headerLink",
  initialState: initialLinkState,
  reducers: {
    setHeaderLink: (state, action: PayloadAction<string>) => {
      state.selectedHeaderLink = action.payload;
    },
  },
});

export const { setHeaderLink } = HeaderActiveLinkSlice.actions;
export default HeaderActiveLinkSlice.reducer;
