import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import Header from './components/Header';
import Home from './containers/Home';
import LoggedInRoute from './components/LoggedInRoute';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <LoggedInRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
