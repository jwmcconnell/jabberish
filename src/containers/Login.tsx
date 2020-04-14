import React, { useState, ChangeEvent } from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUpdatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(username, password);
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

export default Login;
