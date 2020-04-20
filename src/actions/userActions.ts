import { fetchLogin, fetchVerify, fetchRegister } from '../services/auth-api';
import { IAuthCredentials } from '../interfaces/auth-credentials';

export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUser = (user: IAuthCredentials) => (dispatch: any) => {
  dispatch({
    type: LOGIN_USER_LOADING,
  });

  return fetchLogin(user)
    .then((user: any) => {
      dispatch({
        type: LOGIN_USER,
        payload: user,
      });
    })
    .catch((err: Error) => {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: err,
      });
    });
};

export const REGISTER_USER_LOADING = 'REGISTER_USER_LOADING';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUser = (user: IAuthCredentials) => (dispatch: any) => {
  dispatch({
    type: REGISTER_USER_LOADING,
  });

  return fetchRegister(user)
    .then((user: any) => {
      dispatch({
        type: REGISTER_USER,
        payload: user,
      });
    })
    .catch((err: Error) => {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: err,
      });
    });
};

export const VERIFY_USER_LOADING = 'VERIFY_USER_LOADING';
export const VERIFY_USER = 'VERIFY_USER';
export const VERIFY_USER_ERROR = 'VERIFY_USER_ERROR';
export const verifyUser = () => (dispatch: any) => {
  dispatch({
    type: VERIFY_USER_LOADING,
  });

  return fetchVerify()
    .then((user: any) => {
      dispatch({
        type: VERIFY_USER,
        payload: user,
      });
    })
    .catch((err: Error) => {
      dispatch({
        type: VERIFY_USER_ERROR,
        payload: err,
      });
    });
};
