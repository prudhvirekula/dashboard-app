// src/MainContent.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const MainContent = () => (
  <div className="container-fluid p-4">
    <Row>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Total Users</Card.Title>
            <Card.Text>1,234</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Revenue</Card.Title>
            <Card.Text>$10,234</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Orders</Card.Title>
            <Card.Text>534</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>Conversion Rate</Card.Title>
            <Card.Text>5.67%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default MainContent;
