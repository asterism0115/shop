import { LOGIN, SIGNUP } from '../actions/auth';

const initialState = {
  token: null,
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId
      };
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId
      };
    default:
      return state;
  }
};
