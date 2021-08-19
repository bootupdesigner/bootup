import React from "react";
import { Table } from "react-bootstrap";

const ApiTable = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Features</th>
          <th>Starter Booking Design</th>
          <th>Advanced Booking Design</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>PayPal/Stripe</td>
            <td className="text-center">x</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td className="text-center">x</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Extra Service Add-ons</td>
            <td className="text-center">x</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Custom Fields</td>
            <td className="text-center">x</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Coupons</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Google Calendar</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Outlook Calendar</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Deposits</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Recurring Appointments</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Coupons</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Customer Information</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
          <tr>
            <td>Custom Durations</td>
            <td className="text-center">-</td>
            <td className="text-center">x</td>
          </tr>
        </tbody>
    </Table>
  );
};

export default ApiTable;