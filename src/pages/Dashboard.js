import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/dashboard.css';

import PublishRecipeForm from '../components/PublishRecipeForm';

function Dashboard({ setIsDashboardScreen, isDashboardScreen }) {
  const location = useLocation();
  const [content, setContent] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState('publish');
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setIsDashboardScreen(location.pathname === '/dashboard');
    return () => setIsDashboardScreen(false);
  }, [location.pathname, setIsDashboardScreen]);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);

    // Set the content based on the clicked menu item
    if (menuItem === 'publish') {
      setContent(<PublishRecipeForm />);
    } else if (menuItem === 'all') {
      setContent('This is the All Recipes content.');
    } else if (menuItem === 'about') {
      setContent('This is the About App content.');
    }
  };

  return (
    <div className={`dashboard-container ${isDashboardScreen ? 'hide-header' : ''}`}>
      <div className="control-panel">
          <div className='ButtonBackground'>
            <button className="logout-button" onClick={handleLogout}> Logout </button>
          </div>
          <div className='menuBackground'>
            <ul className="menu">
              <li onClick={() => handleMenuItemClick('publish')}>Publish Recipe</li>
              <li onClick={() => handleMenuItemClick('all')}>All Recipes</li>
              <li onClick={() => handleMenuItemClick('about')}>About App</li>
            </ul>
          </div>
      </div>
      <div className="content-area">
        {content}
        {/* Render content based on the selected menu item */}
      </div>
      {buttonClicked && (
        <div className="indicator">Button Clicked!</div>
      )}
    </div>
  );
}

export default Dashboard;
