import React, { useState, ChangeEvent, FormEvent } from 'react';
import AuthForm from '../components/AuthForm';
import { fetchLogin } from '../services/auth-api';
import { getUserId, getUserError } from '../selectors/userSelectors';
import { IAuthCredentials } from '../interfaces/auth-credentials';
import { loginUser } from '../actions/userActions';
import { connect } from 'react-redux';

const Login = (props: { submitLogin: (user: IAuthCredentials) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { submitLogin } = props;

  const handleUpdateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUpdatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitLogin({ username, password });
  };

  return (
    <>
      <AuthForm
        formTitle="Login"
        handleSubmit={handleSubmit}
        handleUpdateUsername={handleUpdateUsername}
        handleUpdatePassword={handleUpdatePassword}
        errorMessage={''}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  userId: getUserId(state),
  error: getUserError(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  submitLogin: (user: IAuthCredentials) => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
