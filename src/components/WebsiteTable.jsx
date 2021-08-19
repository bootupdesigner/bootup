import React from "react";

import { Table } from "react-bootstrap";

const WebsiteTable = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className="text-center">Starter Websites</th>
          <th className="text-center">Advanced Websites</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-center" colSpan="2">
            Setup
          </th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>1st Months Hosting</li>
              <li>Domain Name</li>
              <li>Free SSL Certificate</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>1st Months Hosting</li>
              <li>Domain Name</li>
              <li>Free SSL Certificate</li>
              <li>Premium Theme</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th className="text-center" colSpan="2">
            Data Entry and Design
          </th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Up to 12 Uploads</li>
              <ul>
                <li>Products</li>
                <li>Blogs</li>
                <li>Posts</li>
              </ul>
              <li>Up to 3 Pages</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Up to 48 Uploads</li>
              <ul>
                <li>Products</li>
                <li>Blogs</li>
                <li>Posts</li>
              </ul>
              <li>Up to 9 Pages</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th className="text-center" colSpan="2">
            E-commerce Functionaliy
          </th>
        </tr><tr>
          <td>
            <ul>
              <li>PayPal / Stripe</li>
              <li>Taxes</li>
              <li>Shipping</li>
              <li>Coupons</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>PayPal / Stripe</li>
              <li>Taxes</li>
              <li>Shipping</li>
              <li>Coupons</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th className="text-center" colSpan="2">
            Added Features
          </th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Customer Relationship Management</li>
              <li>Sign up/Subscription Forms</li>
              <li>Facebook Marketplace</li>
              <li>Seach Engine Optimization</li>
              <li>Backup and Restore</li>
              <li>Analytics and Tracking</li>
              </ul>
          </td>
          <td>
            <ul>
              <li>Customer Relationship Management</li>
              <li>Sign up/Subscription Forms and Pop-ups</li>
              <li>Facebook Marketplace</li>
              <li>Seach Engine Optimization</li>
              <li>Backup and Restore</li>
              <li>Analytics and Tracking</li>
              </ul>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default WebsiteTable;