import React, { Component } from 'react';
import NavbarComponent from '../Navbar';
import TimelinebodyComponent from '../TimelineComponent';
import FooterComponent from '../Footer';
export default class TimelineComponent extends Component {
  render() {
    return (
    <div>
       <NavbarComponent />
       <TimelinebodyComponent />
       <FooterComponent />
    </div>
    )
  }
}
