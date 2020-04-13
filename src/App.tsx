import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
