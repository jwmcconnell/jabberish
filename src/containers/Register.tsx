import React, { useState, ChangeEvent, FormEvent } from 'react';
import AuthForm from '../components/AuthForm';
import { signupUser } from '../services/auth-api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleUpdatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(username, password);
    signupUser({ username, password }).then(console.log);
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

export default Register;
