import React from 'react';
import './index.css';
import './style.css';

import Infom from './Infom';
import Map from './Map';
import Nav from './Nav';
import Light from './light';

function App() {
  return (
      <>
        <div className="twinkling"></div>
        <Nav/>
        <Infom/>
        <Map/>
        
      </>
  );
} 

export default App;
