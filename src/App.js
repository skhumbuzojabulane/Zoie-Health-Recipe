import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import NavBottomBar from './components/NavBottomBar'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> {/* Render the Top Navigation component */}
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <NavBottomBar /> {/* Render the Buttom Navigation */}
    </div>
  );
}

export default App;
