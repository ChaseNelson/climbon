import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <div>
          <Header />
          <main>
            <div />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
