import React, { Component } from 'react';
import IndexPageComponent from './Component/IndexPage';
import WorkPageComponent from './Component/DetailPage';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact={true} path="/" component={IndexPageComponent}/>
        <Route exact={true} path="/DetailWork" component={WorkPageComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
