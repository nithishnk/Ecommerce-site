import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ButtonContainer = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: white;
border: 2px solid white;
`
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
          <ButtonContainer className="">
            <span className="mr-2">
            <i className="fas fa-cart-plus"/></span>My Cart</ButtonContainer>
          </Link>
          </li>
          </ul>
       </nav>
      </div>
    )
  }
}
