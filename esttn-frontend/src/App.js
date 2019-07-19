import React from 'react';
import './App.css';
import LeContainer from './containers/LeContainer';
import Client from './components/Client';
import Appointment from './components/Appointment';
import Product from './components/Product';

function App() {
  return ( 
    <div>
      {<LeContainer />}
      {<Client />}
      {<Appointment />}
      {<Product />}
    </div>
  );
  
}

 export default App;