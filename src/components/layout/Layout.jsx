import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/signup', '/login'].includes(location.pathname);
  const isDashboardPage = location.pathname.includes('/teacher') || 
                         location.pathname.includes('/competition') ||
                         location.pathname.includes('/dashboard');

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className={`${isDashboardPage ? 'pt-16' : ''}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 