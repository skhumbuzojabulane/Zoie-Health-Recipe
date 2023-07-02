import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import '../styles/dashboard.css';

import PublishRecipeForm from '../components/PublishRecipeForm';
import RecipeListDashboardCRUID from '../components/RecipeListDashboardCRUID';
import AboutApp from '../components/AboutApp'
import ListHome from '../components/ListHome'

function Dashboard({ setIsDashboardScreen, isDashboardScreen }) {
  const location = useLocation();
  const [content, setContent] = useState(<PublishRecipeForm />);
  const [selectedMenuItem, setSelectedMenuItem] = useState('publish');

  useEffect(() => {
    setIsDashboardScreen(location.pathname === '/dashboard');
    return () => setIsDashboardScreen(false);
  }, [location.pathname, setIsDashboardScreen]);

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // User is not logged in, redirect to login page
        navigate('/');
      }
    });

    // Unsubscribe from the auth state listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Sign out the user from Firebase Authentication
    firebase
      .auth()
      .signOut()
      .then(() => {
        // User logged out successfully
        console.log('Logged out');
        navigate('/'); // Redirect to login page
      })
      .catch((error) => {
        // An error occurred during logout
        console.error('Error logging out:', error);
      });
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);

    // Set the content based on the clicked menu item
    if (menuItem === 'publish') {
      setContent(<PublishRecipeForm />);
    } else if (menuItem === 'all') {
      setContent(<RecipeListDashboardCRUID />);
    } else if (menuItem === 'about') {
      setContent(<AboutApp />);
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
    </div>
  );
}

export default Dashboard;
