import React from 'react';
import '../components/index.css';
import '../components/style.css';

import Infom from '../components/Infom';
import Map from '../components/Map';
import Nav from '../components/Nav';
import Form from '../components/form';
import Vi from '../source/Purple.mp4';
import Show from '../components/showqueue';

const App = () => {
  return (
      <>
      <video autoPlay muted loop id="myVideo">
          <source src={Vi} type="video/mp4"/>
        </video>
        <Nav/>
        <Form/>
        <Show/>
        <Map/>
      </>
  );
} 


export default App;
