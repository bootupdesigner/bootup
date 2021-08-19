import React from "react";
import { Row, Col } from "react-bootstrap";

const StoreDesigns = () => {
    return(
        <div>
          <div className="bg-secondary text-white text-center">
            <h1>E-commerce and Informational Designs</h1>
            <p>Sell your products or service online!</p>
          </div>
          <Row className="mx-3 justify-content-center">
              <Col  md={8} lg={8} xl={8} xxl={8} className="mx-3">
                  <p>A great website is what motivates customers to to choose your brand. Our web design are exactly what you need to increase your sales and visibility on Google.</p>
              </Col>
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
              <Col  sm={4} md={4} lg={4} xl={4} xxl={4} className="mx-3">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="mx-3 justify-content-center">
<input type="hidden" name="cmd" value="_s-xclick" /> 
<input type="hidden" name="hosted_button_id" value="TWK7RC5RDRJH2" />
<table>
<tr><td><input type="hidden" name="on0" value="Website Design Option" />Website Design Option</td></tr><tr><td><select name="os0">
	<option value="Start Up Website Design">Start Up Website Design $700.00 USD</option>
	<option value="Advanced Website Design">Advanced Website Design $900.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

              </Col>

          </Row>

        </div>

    )
}

export default StoreDesigns;