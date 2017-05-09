import React from "react";
import{Nav,Navbar,Button,NavItem} from"react-bootstrap";
import RegisterComponent from "../modalRigister";
import LoginComponent from "../modalLogin";
export default class NavbarComponent extends React.Component{

        render(){
            return(
            <Navbar>   
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>   
       <NavItem eventKey="1" ><RegisterComponent /></NavItem>
        <NavItem eventKey="2" ><LoginComponent /></NavItem>
     </Nav>
    </Navbar.Collapse>
  </Navbar>
            )
        }
}