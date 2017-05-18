import React, { Component } from 'react';
import NavbarComponent from '../Navbar';
import ParagraghComponent from '../Text-welcome';
//import MainThumbnailComponent from '../MainThumbnailbody';
import TimelineComponent from '../TimelinePage';
import FooterComponent from '../Footer';
      /*<NavbarComponent />
      <ParagraghComponent />
      <MainThumbnailComponent />
      <FooterComponent />*/
export default class IndexPageComponent extends Component {
  render() {
    return (
    <div>
      <TimelineComponent />
    </div>
    )
  }
}
