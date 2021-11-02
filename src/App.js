import React from 'react';
import Header from './components/Header';
import './App.css';
import FrontPageLayout from './components/pages/FrontPageLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPageLayout from './components/pages/SearchPageLayout';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/react-website-youtube' exact component={FrontPageLayout} />
          <Route path='/' exact component={FrontPageLayout} />
          <Route path='/search' component={SearchPageLayout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
