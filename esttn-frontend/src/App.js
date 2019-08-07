import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import LeContainer from './containers/LeContainer';
import { fetchLes } from './actions/LeAction'
import ProductsContainer from './containers/ProductsContainer';
import AppointmentsContainer from './containers/AppointmentsContainer';
import ClientsContainer from './containers/ClientsContainer';


class App extends React.Component {
  //only renders after all the elements on the page are rendered correctly****
    componentDidMount() {
      console.log("1") //1st
      this.props.fetchLes()
      console.log("2") //3rd reads this and goes back to complete the fetch
    }

    render() {
      return (
        <>
        {console.log(this.props)}
          <Router>
            <div>
              <NavBar />
              {/* can also have switch */}
              <Route exact path='/'  render={ () => (<LeContainer />)} />
              <Route exact path='/clients' render={ () => (<ClientsContainer />)} />
              <Route exact path='/products' render={ () => (<ProductsContainer />)} />
              <Route exact path='/appointments' render={ () => (<AppointmentsContainer />)} />
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
