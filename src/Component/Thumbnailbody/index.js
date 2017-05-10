import React from "react";
import {Thumbnail,Col,Grid,Button,Row,OverlayTrigger,tooltip,Tooltip} from "react-bootstrap";
import "./index.css";
export default class ThumbnailComponent extends React.Component{
    render(){
        const tooltip = (
  <Tooltip id="tooltip">Description of the product</Tooltip>
);
        return(
            <div className ="margin">
     <Grid> 
    <Row>
    <Col xs={6} md={4}>
      <OverlayTrigger placement="bottom" overlay={tooltip}>
      <Thumbnail src="http://s.imgur.com/images/logo-1200-630.jpg?2"  alt="242x200">
      </Thumbnail>
      </OverlayTrigger>
    </Col>
    <Col xs={6} md={4}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
        <Thumbnail src="http://s.imgur.com/images/logo-1200-630.jpg?2"  alt="242x200">
      </Thumbnail>
       </OverlayTrigger>
    </Col>
    <Col xs={6} md={4}>
        <OverlayTrigger placement="right" overlay={tooltip}>
      <Thumbnail src="http://s.imgur.com/images/logo-1200-630.jpg?2"  alt="242x200">
      </Thumbnail>
       </OverlayTrigger>
    </Col>
    </Row>
  </Grid>
  </div>
        )
    }
}