import React, { Component } from 'react';
import NavbarComponent from '../Navbar';
import ParagraghComponent from '../Text-welcome';
import CategoryComponent from '../Categorybar';
import ThumbnailComponent from '../Thumbnailbody';
import FooterComponent from '../Footer';
export default class IndexPageComponent extends Component {
  render() {
    return (
    <div>
      <NavbarComponent />
      <ParagraghComponent />
      <CategoryComponent />
      <ThumbnailComponent />
      <FooterComponent />
    </div>
    )
  }
}
