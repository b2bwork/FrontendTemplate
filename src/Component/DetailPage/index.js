import React, { Component } from 'react';
import NavbarAfterloginComponent from '../NavbarAfterLogin';
import CarouselBodyComponent from '../CarouselBody'
import FooterComponent from '../Footer';
export default class WorkPageComponent extends Component {
  render() {
    return (
    <div>
      <NavbarAfterloginComponent />
      <CarouselBodyComponent />
      <FooterComponent />
    </div>
    )
  }
}