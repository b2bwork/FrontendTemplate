import React from "react";
import{Nav,Navbar,Button,NavItem} from"react-bootstrap";
import RegisterComponent from "../modalRigister";
import LoginComponent from "../modalLogin";
import './index.css';
export default class NavbarComponent extends React.Component{
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
       <NavItem eventKey="1" ><LoginComponent /></NavItem>
       <NavItem eventKey="2" ><RegisterComponent /></NavItem>
      <NavItem eventKey="3" >Add work</NavItem>
      <NavItem eventKey="4" >Notification<i className="fa fa-bell" aria-hidden="true"></i></NavItem>
      
     </Nav>
    </Navbar.Collapse>
  </Navbar>
            )
        }
}