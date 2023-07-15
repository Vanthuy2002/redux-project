import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Emi Fukuda',
    age: 25,
    desc: 'I am a intern devs Font-end',
    avatar: 'https://pbs.twimg.com/media/ECMYzEBWkAExhme.jpg',
    pending: false,
    error: false,
  },
  reducers: {
    updating: (state) => {
      return { ...state, pending: true };
    },
    updateErr: (state) => {
      return { ...state, error: true, pending: false };
    },

    updateSuccess: (state, actions) => {
      (state.pending = false),
        (state.error = false),
        (state.name = actions.payload.name),
        (state.age = actions.payload.age),
        (state.desc = actions.payload.desc),
        (state.avatar = actions.payload.avatar);
    },
  },
});

export const { updateErr, updateSuccess, updating } = userSlice.actions;
export default userSlice.reducer;
