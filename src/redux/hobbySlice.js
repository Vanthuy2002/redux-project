import { createSlice } from '@reduxjs/toolkit';

const hobbySlice = createSlice({
  name: 'hobby',
  initialState: {
    list: [],
    activeId: null,
  },
  reducers: {
    addHobby: (state, actions) => {
      return { ...state, hobby: actions.payload };
    },
    setActiveHobby: (state, actions) => {
      return { ...state, activeId: actions.payload };
    },
  },
});

export const { addHobby, setActiveHobby } = hobbySlice.actions;
export default hobbySlice.reducer;
