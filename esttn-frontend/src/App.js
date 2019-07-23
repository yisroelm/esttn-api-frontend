import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import LesContainer from './containers/LesContainer';
import Client from './components/Client';
import Appointment from './components/Appointment';
import Product from './components/Product';


function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/'  component={LesContainer} />
          <Route exact path='/clients' component={Client}/>
          <Route exact path='/products' component={Product} />
          <Route exact path='/appointments' component={Appointment} />
        </div>
      </Router>
    </>
  );
}

 export default App;