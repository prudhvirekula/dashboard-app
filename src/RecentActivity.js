// src/RecentActivity.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const RecentActivity = () => (
  <ListGroup>
    <ListGroup.Item>User1 placed an order.</ListGroup.Item>
    <ListGroup.Item>User2 updated their profile.</ListGroup.Item>
    <ListGroup.Item>User3 left a review.</ListGroup.Item>
  </ListGroup>
);

export default RecentActivity;
