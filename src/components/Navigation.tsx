import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </nav>
  );
};

export default Navigation;
