import React from 'react';

import Slider from '../components/Slider';
import ListHome from '../components/ListHome';

function Home() {
  return (
    <div>
      <Slider />    
        <div>
          <ListHome /> 
        </div>
    </div>
  );
}

export default Home;
