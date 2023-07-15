import { createSlice } from '@reduxjs/toolkit';

const hobbySlice = createSlice({
  name: 'hobby',
  initialState: {
    hobby: [],
  },
  reducers: {
    addHobby: (state, actions) => {
      return { ...state, hobby: actions.payload };
    },
  },
});

export const { addHobby } = hobbySlice.actions;
export default hobbySlice.reducer;
