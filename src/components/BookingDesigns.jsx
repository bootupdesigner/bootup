import React from "react";
import { Row, Col } from "react-bootstrap";

import ApiTable from "./ApiTable";
import WebsiteTable from "./WebsiteTable";

const BookingDesigns = () => {
  return (
    <div>
      <div className="bg-secondary text-white text-center">
        <h1>Booking and API Website Designs</h1>
        <p>We design websites custom to your needs</p>
      </div>
      <Row className="mx-3 justify-content-center">
        <Col md={8} lg={8} xl={8} xxl={8} className="mx-3">
          <p>
            Your API website design comes with all the features included in our
            informational designs. API based website designs are customized to
            meet your company needs, such as booking, restaraunt orders,
            multivendor websites and more.
          </p>
        </Col>
      </Row>

      <Row className="mx-3 justify-content-center">
        <Col md={8} lg={8} xl={8} xxl={8} className="mx-3 text-center">
          <h2>Booking Website Features</h2>
        </Col>
        <Col md={8} lg={8} xl={8} xxl={8}>
          <ApiTable />
        </Col>
      </Row>

      <Row className="mx-3 justify-content-center">
        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="d-flex flex-row justify-content-center">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="T4Z3673BD8WQ8" />
<table>
<tr><td><input type="hidden" name="on0" value="API Website Design" />API Website Design</td></tr><tr><td><select name="os0">
	<option value="Starter API Website">Starter API Website $955.00 USD</option>
	<option value="Advanced API Website">Advanced API Website $1,400.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="credit card options" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>


        </Col>
      </Row>

<Row className="mx-3 justify-content-center">
  <Col md={8} lg={8} xl={8} xxl={8} className="mx-3 text-center">
    <h2>Online Store Features</h2>
  </Col>
  <Col md={8} lg={8} xl={8} xxl={8}>
    <WebsiteTable />
  </Col>
</Row>
    </div>
  );
};

export default BookingDesigns;