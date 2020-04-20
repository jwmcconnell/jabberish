import {
  REGISTER_USER,
  REGISTER_USER_LOADING,
  REGISTER_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_LOADING,
  LOGIN_USER_ERROR,
  VERIFY_USER_LOADING,
  VERIFY_USER,
  VERIFY_USER_ERROR,
} from '../actions/userActions';

const initialState = {
  userId: null,
  username: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case REGISTER_USER_LOADING:
      return { ...state, loading: true };
    case REGISTER_USER:
      return {
        ...state,
        loading: false,
        userId: action.payload._id,
        username: action.payload.username,
        error: null,
      };
    case REGISTER_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_USER_LOADING:
      return { ...state, loading: true };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        userId: action.payload._id,
        username: action.payload.username,
        error: null,
      };
    case LOGIN_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case VERIFY_USER_LOADING:
      return { ...state, loading: true };
    case VERIFY_USER:
      return {
        ...state,
        loading: false,
        userId: action.payload._id,
        username: action.payload.username,
        error: null,
      };
    case VERIFY_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
