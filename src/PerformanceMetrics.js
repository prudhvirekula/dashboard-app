// src/PerformanceMetrics.js
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PerformanceMetrics = () => (
  <div>
    <h5>Site Speed</h5>
    <ProgressBar now={80} label={`${80}%`} />

    <h5>Order Completion</h5>
    <ProgressBar now={60} label={`${60}%`} />
  </div>
);

export default PerformanceMetrics;
