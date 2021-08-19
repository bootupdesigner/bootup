import React from "react";
import { Row, Col } from "react-bootstrap";

import WebsiteTable from "./WebsiteTable";

const StoreDesigns = () => {
  return (
    <div>
      <div className="bg-secondary text-white text-center">
        <h1>E-commerce and Informational Designs</h1>
        <p>Sell your products or service online!</p>
      </div>
      <Row className="mx-3 justify-content-center">
        <Col md={8} lg={8} xl={8} xxl={8} className="mx-3">
          <p>
            A great website is what motivates customers to to choose your brand.
            Our web design are exactly what you need to increase your sales and
            visibility on Google.
          </p>
        </Col>
      </Row>
      <Row className="mx-3 justify-content-center">
        <Col md={8} lg={8} xl={8} xxl={8} className="mx-3 text-center">
          <h2>Online Store Design Features</h2>
        </Col>
      </Row>
      <Row className="mx-3 justify-content-center">
        <Col md={8} lg={8} xl={8} xxl={8}>
          <WebsiteTable />
        </Col>
      </Row>

      <Row className="mx-3 justify-content-center">
        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="d-flex flex-row justify-content-center">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="TWK7RC5RDRJH2" />
<table>
<tr><td><input type="hidden" name="on0" value="Website Design Option" />Website Design Option</td></tr><tr><td><select name="os0">
	<option value="Starter Website Design">Starter Website Design $700.00 USD</option>
	<option value="Advanced Website Design">Advanced Website Design $900.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="credit card options" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
        </Col>
      </Row>
    </div>
  );
};

export default StoreDesigns;