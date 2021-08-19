import React from "react";
import { Row, Col } from "react-bootstrap";

const BookingDesigns = () => {
    return(
        <div>
          <div className="bg-secondary text-white text-center">
            <h1>Booking and API Website Designs</h1>
            <p>We design websites custom to your needs</p>
          </div>
          <Row className="mx-3 justify-content-center">
              <Col  md={8} lg={8} xl={8} xxl={8} className="mx-3">
                  <p>Your API website design comes with all the features included in our informational designs. This choice is customized to meet your company needs, such as booking, restaraunt orders, multivendor websites and more.</p>
              </Col>
              </Row>
              <Row className="mx-3 justify-content-center">

              <Col  sm={4} md={4} lg={4} xl={4} xxl={4} className="mx-3">
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="LC8G9LGX3RSBS" />
<table>
<tr><td><input type="hidden" name="on0" value="Website Design Option" />Website Design Option</td></tr><tr><td><select name="os0">
	<option value="Start Up API Design">Start Up API Design $955.00 USD</option>
	<option value="Advanced API Design">Advanced API Design $1,400.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
              </Col>
              </Row>
              <Row className="mx-3 justify-content-center">

              <Col  md={4} lg={4} xl={4} xxl={4} className="justify-content-center">
                  <p><b>Start Up Websites</b></p>
                  <span>Setup</span>
                  <ul>
                      <li>1st Months Hosting</li>
                      <li>Domain Name</li>
                      <li>Free SSL Certificate</li>
                  </ul>
                  <span>Data Entry and Design</span>
                  <ul>
                      <li>Up to 12 uploads</li>
                      <ul>
                      <li>Products</li>
                      <li>Blogs</li>
                      <li>Posts</li>
                      </ul>
                      <li>Up to 3 Pages</li>
                  </ul>
                  <span>E-commerce Functionality</span>
                  <ul>
                      <li>PayPal / Stripe</li>
                      <li>Shipping</li>
                      <li>Taxes</li>
                      <li>Coupons</li>
                  </ul>
                  <span>Added Features</span>
                  <ul>
                      <li>Customer Relationship Management</li>
                      <li>Sign Up / Subscription Forms</li>
                      <li>Facebook Marketplace</li>                      
                      <li>Search Engine Optimization</li>
                      <li>Back up and Restore</li>
                      <li>Analytics and Tracking</li>
                  </ul>
              </Col>

              <Col  md={4} lg={4} xl={4} xxl={4} className="justify-content-center">
              <p><b>Advanced Websites</b></p>
                  <span>Setup</span>
                  <ul>
                      <li>1st Months Hosting</li>
                      <li>Domain Name</li>
                      <li>Free SSL Certificate</li>
                      <li>Premium Theme</li>
                  </ul>
                  <span>Data Entry and Design</span>
                  <ul>
                      <li>Up to 48 uploads</li>
                      <ul>
                      <li>Products</li>
                      <li>Blogs</li>
                      <li>Posts</li>
                      </ul>
                      <li>Up to 9 Pages</li>
                  </ul>
                  <span>E-commerce Functionality</span>
                  <ul>
                      <li>PayPal / Stripe</li>
                      <li>Shipping</li>
                      <li>Taxes</li>
                      <li>Coupons</li>
                  </ul>
                  <span>Added Features</span>
                  <ul>
                      <li>Customer Relationship Management</li>
                      <li>Sign Up / Subscription Forms and Pop-ups</li>
                      <li>Facebook Marketplace</li>                      
                      <li>Search Engine Optimization</li>
                      <li>Back up and Restore</li>
                      <li>Analytics and Tracking</li>
                  </ul>
              </Col>
              </Row>
        </div>

    )
}

export default BookingDesigns;