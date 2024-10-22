import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import ChartWidget from './ChartWidget';
import RecentActivity from './RecentActivity';
import PerformanceMetrics from './PerformanceMetrics';
import Footer from './Footer';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <div className="container-fluid">
          <MainContent />
          <ChartWidget />
          <RecentActivity />
          <PerformanceMetrics />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
