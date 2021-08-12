import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Hello } from '../hello/hello';


export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Hello}/>
      <Route exact path="/workout" component={Hello}/>
    </Switch>
   
  );
};
