import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5 ">
          <Link to="/">
        <img src={logo}></img></Link>
         <ul className="navbar-nav align-item-center ">
         <li className="nav-item ml-5"><Link to="/">
          Products</Link>
          </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item " ><Link to="/Cart">
          <Button className="">
            <i className="fas fa-cart-plus"></i></Button>
          My Cart</Link>
          </li>
          </ul>
       </nav>
      </div>
    )
  }
}
