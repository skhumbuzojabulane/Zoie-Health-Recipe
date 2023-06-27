import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import NavBar from './components/NavBar'
import Slider from './components/Slider';
import NavBottomBar from './components/NavBottomBar'

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Render the Top Navigation component */}
      <Slider /> {/* Render the Slider component */}
      <NavBottomBar /> {/* Render the Buttom Navigation */}
    </div>
  );
}

export default App;
