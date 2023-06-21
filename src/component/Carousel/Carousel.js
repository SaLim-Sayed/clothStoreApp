import React from 'react'
import { Carousel } from 'react-bootstrap'

import image1 from "./../../img/shirt/image1.jpg";
import image2 from "./../../img/shirt/image2.jpg";
import image3 from "./../../img/shirt/image3.jpg";
import image4 from "./../../img/shirt/image4.jpg";
import image5 from "./../../img/shirt/image5.jpg";
import image6 from "./../../img/shirt/image6.jpg";




import '../style/style.css';
export default function _Carousel() {
    return (
    <div >
            <Carousel className="container" style={{marginTop:'10px'}} >
                <Carousel.Item interval={200}>
                    <img
                    className="d-block my-6 w-100 "
                    height='400px'
                    src={image5}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block my-6 w-100 "
                    height='400px'
                    src={image2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block my-6 w-100"
                    height='400px'
                    src={image6}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block my-6 w-100 "
                    height='400px'
                    src={image1}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div> 
    )
}
