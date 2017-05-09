import React from "react";
import {NavItem,Button,Modal,FormGroup,ControlLabel,FormControl,Form,button} from 'react-bootstrap';
export default class RegisterComponent extends React.Component{
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
          Register
        </NavItem>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="form-group">
           <label class="col-sm-2 control-label">Email:</label>
           <FormGroup>
           <FormControl type="text" placeholder="Email" />
          </FormGroup>
           </div>
           <div>
           <label class="col-sm-2 control-label">UserName:</label>
            <FormGroup>
           <FormControl type="text" placeholder="UserName" />
          </FormGroup>
           </div>
            <div>
           <label class="col-sm-2 control-label">Password:</label>
            <FormGroup>
           <FormControl type="text" placeholder="Password" />
          </FormGroup>
           </div>
           <Button bsStyle="success">Submit</Button>
          </Modal.Body>
        </Modal>
        </div>
      )

    }
}