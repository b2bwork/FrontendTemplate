import React from 'react';
import {Row,Grid,Col,Table,Carousel,Button} from 'react-bootstrap';
export default class CarouselBodyComponent extends React.Component{
    render(){
        return(
            <div className="DetailWork">
            <Grid>
             <Row className="show-grid">
               <Col xs={12} md={6} bsClass="btn-detail">
               <div className="detail col-md-6 col-xs-12">
                <Carousel>
                    <Carousel.Item>
                     <img width={900} height={500} alt="900x500" src="http://s.imgur.com/images/logo-1200-630.jpg?2"/>
                    </Carousel.Item>
                    <Carousel.Item>
                     <img width={900} height={500} alt="900x500" src="http://s.imgur.com/images/logo-1200-630.jpg?2"/>
                    </Carousel.Item>
                </Carousel>
               <h2 className="text-center">หหห</h2>
               <div>
                <h3>ข้อมูลเกี่ยวกับราคา</h3>
                <Table responsive hover>
                 <thead>
                  <tr>
                    <th>ราคา</th>
                    <th>ระยะเวลา</th>
                    </tr>
                 </thead>
                 <tbody>
                  <tr>
                   <td> บาท</td>
                   <td> วัน</td>
                  </tr>
                 </tbody>
                </Table>
                <h3>ขอบเขตของงาน</h3>
                <p></p>
                <h3>ประสบการณ์การทำงาน</h3>
                <p></p>
               </div>
               </div>
               </Col>
               <Col xs={12} md={6} bsClass="btn-detail">
                <div className="col-md-6 col-xs-12">
                    <div className="col-md-4 text-right">
                        <i className="fa fa-shopping-cart" aria-hidden="true">
                         
                        </i>
                        </div><br/>
                    <Button bsStyle="primary">คุยกับ freelance</Button>
                    <div className="col-md-6">
                        <h3>รีวิว</h3>
                        <div className="col-md-12" >
                        
                        </div>
                    </div>
                </div>
               </Col>
             </Row>
            </Grid>
          </div>
        )
    }
}