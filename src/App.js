import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Browse from './components/Browse';
import Weather from './components/Weather';
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
              <Route exact path="/About" component={About} />
              <Route exact path="/Weather" component={Weather} />
              <Route exact path="/Browse" component={Browse} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
