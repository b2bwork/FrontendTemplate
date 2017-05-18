import React, { Component } from 'react';
import NavbarComponent from '../Navbar';
import ParagraghComponent from '../Text-welcome';
import SubThumbnailComponent from '../SubThumbnailbody';
import FooterComponent from '../Footer';
export default class SubCategoryPageComponent extends Component {
  render() {
    return (
    <div>
      <NavbarComponent />
      <ParagraghComponent />
      <SubThumbnailComponent SubCategoryId={this.props.match.params.Id} />
      <FooterComponent />
    </div>
    )
  }
}
