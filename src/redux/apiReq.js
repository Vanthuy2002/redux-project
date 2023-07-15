import { updateErr, updateSuccess, updating } from './userSlice';

const callApiGetUser = async (payload, dispatch) => {
  dispatch(updating());
  try {
    dispatch(updateSuccess(payload));
  } catch (error) {
    dispatch(updateErr());
  }
};

export { callApiGetUser };
