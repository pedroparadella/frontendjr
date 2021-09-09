import React from 'react';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}
