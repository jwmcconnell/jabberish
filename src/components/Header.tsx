import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Navigation from './Navigation';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Jabberish
        </Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
