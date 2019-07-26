import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import LesContainer from './containers/LesContainer';
import { fetchLes } from './actions/LeAction'
import ProductsContainer from './containers/ProductsContainer';
import AppointmentsContainer from './containers/AppointmentsContainer';
import ClientsContainer from './containers/ClientsContainer';


class App extends React.Component {

    componentDidMount() {
      this.props.fetchLes()
    }
    // console.log()
    // this.interval = setInterval(() =>{
    //  } ,250)

  render() {
    return (
      <>
      {console.log(this.props)}
        <Router>
          <div>
            <NavBar />
            {/* can also have switch */}
            <Route exact path='/'  component={LesContainer} />
            <Route exact path='/clients' render={ () => (<ClientsContainer />)} />
            <Route exact path='/products' render={ () => (<ProductsContainer les={this.props.les} />)} />
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
