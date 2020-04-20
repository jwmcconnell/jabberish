import React from 'react';
import { Link } from 'react-router-dom';

import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={(e) => handleClick(e)}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/workspaces" onClick={handleClose}>
          Workspaces
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Navigation;
