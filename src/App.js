import React, { Component } from 'react';
import NavbarComponent from "./Component/Navbar";
import ParagraphComponent from "./Component/Text-welcome";
import CategoryComponent from "./Component/์Categorybar";
import ThumbnailComponent from "./Component/Thumbnailbody"
class App extends Component {
  render() {
    return (
      <div>
          <div className="container-fluid">
            <NavbarComponent />
            <ParagraphComponent />
            <CategoryComponent />
            <ThumbnailComponent />
          </div>
      </div>
    );
  }
}

export default App;
