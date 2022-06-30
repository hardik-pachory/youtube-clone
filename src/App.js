import React from 'react';
import Header from './components/Header/Header';
import SideNav from './components/SideNav';
import Videos from './components/Videos';
import { useSelector } from 'react-redux/es/exports';
import Watch from './components/Watch';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {

  const themeState = useSelector(state => state.lightTheme)
  const theme = themeState?'light':'dark'
  return (
    <div className="App" id={theme}>
      <Header />
      <SideNav />
      <Switch>
        <Route path="/" exact>
          <Videos />
        </Route>
        <Route path="/:id" exact>
          <Watch/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
