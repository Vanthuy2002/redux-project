import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: [
      {
        title: '',
        desc: '',
        select: '',
      },
    ],
  },
  reducers: {
    createPost: (state, actions) => {
      const newPost = [...state.post];
      newPost.push(actions.payload);
      return { ...state, post: newPost };
    },
    deletePost: (state, actions) => {
      let newPost = [...state.post];
      newPost = newPost.filter((post) => post.title !== actions.payload);
      return { ...state, post: newPost };
    },
  },
});

export const { createPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
