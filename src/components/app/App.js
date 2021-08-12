import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Goodbye } from '../greetings/goodbye';
import { Hello } from '../greetings/hello';
import { Header } from '../header/Header';



export const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Hello}/>
        <Route exact path="/workout" component={Goodbye}/>
      </Switch>
    </>
  );
};
