import React from "react";
import{Nav,Navbar,Button,NavItem,Image} from"react-bootstrap";
import './index.css';
export default class NavbarAfterloginComponent extends React.Component{
        render(){
            return(
    <Navbar className="Navbarcolorless header">   
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>   
      <NavItem eventKey={1} >Add work</NavItem>
      <NavItem eventKey={2} >Notification<i className="fa fa-bell" aria-hidden="true"></i></NavItem>
     </Nav>
    </Navbar.Collapse>
  </Navbar>
            )
        }
}
