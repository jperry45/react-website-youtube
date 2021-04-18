import React from 'react';
import Header from './components/Header';
import './App.css';
import FrontPageLayout from './components/pages/FrontPageLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import APODPageLayout from './components/pages/APODPageLayout';
import NEAPageLayout from './components/pages/NEAPageLayout';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={FrontPageLayout} />]
          <Route path='/astronomy' component={APODPageLayout} />
          <Route path='/asteroid' component={NEAPageLayout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
