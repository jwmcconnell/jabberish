import React, { Component } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { getUserId } from '../selectors/userSelectors';

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
  userId: string | null;
}

const LoggedInRoute = ({
  component: Component,
  userId,
  ...otherProps
}: IProps) => {
  const history = useHistory();
  if (!userId) history.push('/login');
  return (
    <>
      <Header />
      <Route
        render={(otherProps) => (
          <>
            <Component {...otherProps} />
          </>
        )}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  userId: getUserId(state),
});

export default connect(mapStateToProps)(LoggedInRoute);
