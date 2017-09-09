import {Button, Jumbotron, Carousel, CarouselItem, Form, Col, FormGroup, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';
import React from 'react';

export default class FrontPage extends React.Component {
    render(){
        return(
            <div>
                <div id="jumbotron">
                <Jumbotron>
    <h1>Euro Travel</h1>
    <p>The worlds finest travel accommodation accessory</p>

    <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
        </div>

        <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="http://duntonhotsprings.com/files/7314/1344/7797/Echo-Cabin.jpg"/>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="http://www.telegraph.co.uk/content/dam/Travel/galleries/travel/activityandadventure/The-worlds-most-beautiful-mountains/mountains-Kirkjufe_3374110a.jpg"/>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://media.cntraveler.com/photos/58acc16ee85725558885abc8/16:9/w_1024,c_limit/tahiti-GettyImages-550870471.jpg"/>
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
        )
    }
}
