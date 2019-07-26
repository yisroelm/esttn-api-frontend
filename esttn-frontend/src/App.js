import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import LesContainer from './components/Les';
import { fetchLes } from './actions/LeAction'
import Client from './components/Clients';
import Product from './components/Products';
import AppointmentsContainer from './containers/AppointmentsContainer';


class App extends React.Component {

  componentDidMount() {
    // console.log()
    // this.interval = setInterval(() =>{
      this.props.fetchLes()
    //  } ,250)
  }

  render() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/'  component={LesContainer} />
          <Route exact path='/clients' render={ () => (<Client les={this.props.les} />)} />
          <Route exact path='/products' render={ () => (<Product les={this.props.les} />)} />
          <Route exact path='/appointments' render={ () => (<AppointmentsContainer les={this.props.les} />)} />
        </div>
      </Router>
    </>
  );
}
}

const mapStateToProps = state => {
 return {les: state.les}
}

export default connect(mapStateToProps, {fetchLes})(App)
