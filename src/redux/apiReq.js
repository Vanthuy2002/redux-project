import { updateErr, updateSuccess, updating } from './userSlice';

const callApiGetUser = (payload, dispatch) => {
  dispatch(updating());
  try {
    dispatch(updateSuccess(payload));
  } catch (error) {
    dispatch(updateErr());
  }
};

export { callApiGetUser };
