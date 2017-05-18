import React from "react";
import {Thumbnail,Col,Grid,Button,Row,OverlayTrigger,tooltip,Tooltip} from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./index.css";

/*import NavbarComponent from '../Navbar';
import ParagraghComponent from '../Text-welcome';
import MainThumbnailComponent from '../MainThumbnailbody';
import FooterComponent from '../Footer';

export default class SubThumbnailComponent extends React.Component{

     constructor(props){
         super(props)
     }
    render(){
           const tooltip = (
                         <Tooltip id="tooltip">Description of the product</Tooltip>
                          );
                         return(
            <div className ="margin">
     <Grid> 
    <Row>
        {
            listlink1.map((link,key) => {
               return (
                    <Link to={{pathname: link.link.toString()}}>
                      <Col xs={6} md={4} key={key}>
                       <div className="shadow">
                        <OverlayTrigger placement="top" overlay={tooltip}>
                         <Thumbnail src="http://s.imgur.com/images/logo-1200-630.jpg?2"  alt="242x200"/>
                        </OverlayTrigger>
                      </div>
                     </Col>
                   </Link>
               )
            })
            }
  

    </Row>
  </Grid>
  </div>
        )
    }
}*/