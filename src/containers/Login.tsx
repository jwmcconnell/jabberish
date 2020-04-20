import React, { useState, ChangeEvent, FormEvent } from 'react';
import AuthForm from '../components/AuthForm';
import { fetchLogin } from '../services/auth-api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error>();

  const handleUpdateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUpdatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchLogin({ username, password })
      .then(console.log)
      .catch((err: Error) => {
        setError(err);
      });
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
