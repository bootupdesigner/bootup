import React from "react";

import { Slide } from 'react-slideshow-image';
import { Row, Col } from "react-bootstrap";

import 'react-slideshow-image/dist/styles.css'

const Reviews = () => {
    return(
        <Row className="slide-container mx-3 justify-content-center">

            <Col sm={12} md={12} lg={8} xl={8} xxl={8}>
            <Slide>
                <div classname="each-slide">
                    <div>
                        <span>
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsherwin.riley%2Fposts%2F10103554661003102&show_text=true&width=500" width="100%" height="218" style={{border: "none",overflow:" hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </span>
                    </div>
                </div> 
                <div classname="each-slide">
                    <div>
                        <span>
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdorrett.burrell.3%2Fposts%2F1122403971489598&show_text=true&width=500" width="100%" height="158" style={{border: "none",overflow:" hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </span>
                        </div>
                        </div>
               
            </Slide>
            </Col>
        </Row>
    )
}

export default Reviews;