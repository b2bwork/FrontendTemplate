import React, { Component } from 'react';
import IndexPageComponent from './Component/IndexPage';
import WorkPageComponent from './Component/DetailPage';
import SubCategoryPageComponent from './Component/SubCategoryPage';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
 //<Route exact={true} path="/DetailWork" component={WorkPageComponent}/>
  //<Route exact={true} path="/SubCategory/:Id" component={SubCategoryPageComponent}/>
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact={true} path="/" component={IndexPageComponent}/>   
        </Switch>
      </Router>
    );
  }
}

export default App;
