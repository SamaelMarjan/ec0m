import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {FiShoppingCart} from 'react-icons/fi';

const Nav = () => {
  return (
    <Navbar>
      <div className='navbar'>
        <ul className='navbar-lists'>
          <li>
            <NavLink to='/' className='navbar-link home-link'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='navbar-link home-link'>About</NavLink>
          </li>
          <li>
            <NavLink to='/products' className='navbar-link home-link'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='navbar-link home-link'>Contact</NavLink>
          </li>
          <NavLink to='/cart' className='navbar-link cart-trolley--link'>
            <FiShoppingCart className='cart-trolley' />
            <span className='cart-total-item'>10</span>
          </NavLink>
        </ul>
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;
  }

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.black};
      transition: color 0.2s linear;
    }

    &:hover,
    &:active {
      color: ${({theme}) => theme.colors.helper}
    }
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 2.5rem;
    }

    .cart-total-item {
      width: 2rem;
      height: 2rem;
      position: absolute;
      background-color: #000;
      color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({theme}) => theme.colors.helper}
    }
  }
`;

export default Nav;