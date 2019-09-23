import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Register from './pages/register/register.component';
import Header from './components/header/header.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      {/* <Route exact path='/' component={HomePage} /> */}
      <Route path='/register' component={Register} />
    </Switch>
  </div>
);

export default App;
