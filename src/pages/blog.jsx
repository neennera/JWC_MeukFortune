import React from 'react';
import '../components/index.css';
import '../components/style.css';

import Blog from '../components/blog';
import Map from '../components/Map';
import Nav from '../components/Nav';
import Vi from '../source/Purple.mp4';

const App = () => {
  return (
      <>
        <video autoPlay muted loop id="myVideo">
          <source src={Vi} type="video/mp4"/>
        </video>
        
        <Nav/>
        <Blog/>
        <Map/>   
      </>
  );
} 

export default App;
