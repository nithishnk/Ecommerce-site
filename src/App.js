import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar'
import Productlist from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'
import {Switch, Route} from 'react-router-dom'
export default class componentName extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
          <Switch>
            <Route path="/" exact><Productlist/></Route>
            <Route path="/Details"><Details/></Route>
            <Route path="/Cart"><Cart/></Route>
            <Route><Default/></Route>
          </Switch>
      </React.Fragment>
)
  }
}
