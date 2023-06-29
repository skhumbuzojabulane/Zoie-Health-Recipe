import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/dashboard.css';

function Dashboard({ setIsDashboardScreen, isDashboardScreen }) {
  const location = useLocation();

  useEffect(() => {
    setIsDashboardScreen(location.pathname === '/dashboard');
    return () => setIsDashboardScreen(false);
  }, [location.pathname, setIsDashboardScreen]);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  return (
    <div className={`dashboard-container ${isDashboardScreen ? 'hide-header' : ''}`}>
      <div className="control-panel">
          <div className='ButtonBackground'>
            <button className="logout-button" onClick={handleLogout}> Logout </button>
          </div>
          <div className='menuBackground'>
            <ul className="menu">
            <li>Publish Recipe</li>
            <li>All recipes</li>
            <li>About App</li>
        </ul>
          </div>
      </div>
      <div className="content-area">
        {/* Render content based on the selected menu item */}
      </div>
    </div>
  );
}

export default Dashboard;
