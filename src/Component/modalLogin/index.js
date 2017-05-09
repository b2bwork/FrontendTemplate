import React from "react";
import {NavItem,Button,Modal,FormGroup,FormControl,ButtonToolbar} from 'react-bootstrap';
export default class LoginComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
             showModal: false,
             WorkId: "",
             ReviewerName: localStorage.getItem('UserName'),
             Reviewdata: "",
             Star: "",
             Images: []
    };
    }
    
  getInitialState() {
    return { showModal: false };
                    }

  close() {
    this.setState({ showModal: false });
          }

  open() {
    this.setState({ showModal: true });
         }

    addReview(){

    }
    onDrop(Images) {
    this.setState({
      Images
    });
  }
    render(){
      return(
          <div>
          <NavItem 
          onClick={this.open.bind(this)}>
          Login
        </NavItem>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="form-group">
           <label class="col-sm-2 control-label">UserName</label>
            <FormGroup>
           <FormControl type="text" placeholder="UserName" />
          </FormGroup>
           </div>
           <div class="form-group">
           <label class="col-sm-2 control-label">Password</label>
            <FormGroup>
           <FormControl type="text" placeholder="Password" />
          </FormGroup>
           </div>
           <div>
            <ButtonToolbar>
            <Button bsStyle="success">Login</Button>
            <Button bsStyle="primary">Login with Facebook</Button>
            <Button bsStyle="danger">Login with Google</Button>
             </ButtonToolbar>
           </div>
          </Modal.Body>
        </Modal>
        </div>
      )

    }
}