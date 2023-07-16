import { createSlice } from '@reduxjs/toolkit';

const hobbySlice = createSlice({
  name: 'hobby',
  initialState: {
    list: [],
  },
  reducers: {
    addHobby: (state, actions) => {
      const newList = [...state.list];
      newList.push(actions.payload);
      return { ...state, list: newList };
    },

    setActive: (state, actions) => {
      const { id } = actions.payload;
      const hobby = state.list.find((item) => item.id === id);
      if (hobby) {
        hobby.activeId = true;
      }
    },
  },
});

export const { addHobby, setActive } = hobbySlice.actions;
export default hobbySlice.reducer;
