import React, { useState, ChangeEvent, FormEvent } from 'react';
import AuthForm from '../components/AuthForm';
import { connect } from 'react-redux';
import { getUserId, getUserError } from '../selectors/userSelectors';
import { registerUser } from '../actions/userActions';
import { IAuthCredentials } from '../interfaces/auth-credentials';

const Register = (props: {
  submitRegister: (user: IAuthCredentials) => void;
  userId: string;
  error: string;
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { submitRegister } = props;

  const handleUpdateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUpdatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitRegister({ username, password });
  };

  return (
    <>
      <AuthForm
        formTitle="Register"
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
  submitRegister: (user: IAuthCredentials) => dispatch(registerUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
