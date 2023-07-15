import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Emi Fukuda',
    age: 25,
    desc: 'I am a intern devs Font-end',
    avatar: 'https://pbs.twimg.com/media/ECMYzEBWkAExhme.jpg',
  },
  reducers: {
    updateUser: (state, actions) => {
      (state.name = actions.payload.name),
        (state.age = actions.payload.age),
        (state.desc = actions.payload.desc),
        (state.avatar = actions.payload.avatar);
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
