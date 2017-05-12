import React, { Component } from 'react';
import IndexPageComponent from './Component/IndexPage';
import WorkPageComponent from './Component/DetailPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={WorkPageComponent}/>
      </Router>
    );
  }
}

export default App;
