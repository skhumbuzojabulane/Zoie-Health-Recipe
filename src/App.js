import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import NavBottomBar from './components/NavBottomBar';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  const [isDashboardScreen, setIsDashboardScreen] = useState(false);

  return (
    <div className="App">
      <Router>
        {!isDashboardScreen && <NavBar />} {/* Render the Top Navigation component unless on the Dashboard screen */}
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          <Route
            path="/login"
            element={<Login setIsDashboardScreen={setIsDashboardScreen} />}
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                setIsDashboardScreen={setIsDashboardScreen}
                isDashboardScreen={isDashboardScreen}
              />
            }
          />
        </Routes>
        <NavBottomBar /> {/* Render the Bottom Navigation */}
      </Router>
    </div>
  );
}

export default App;
