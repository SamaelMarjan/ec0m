import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {FiShoppingCart} from 'react-icons/fi';
import {CgClose, CgMenu} from 'react-icons/cg';

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <Navbar>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className='navbar-lists'>
          <li>
            <NavLink to='/' className='navbar-link home-link' onClick={() => setMenuIcon(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='navbar-link home-link' onClick={() => setMenuIcon(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to='/products' className='navbar-link home-link' onClick={() => setMenuIcon(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='navbar-link home-link' onClick={() => setMenuIcon(false)}>Contact</NavLink>
          </li>
          <NavLink to='/cart' className='navbar-link cart-trolley--link' onClick={() => setMenuIcon(false)}>
            <FiShoppingCart className='cart-trolley' />
            <span className='cart-total-item'>10</span>
          </NavLink>
        </ul>

        {/* open and close button */}
        <div className='mobile-navbar-btn'>
          <CgMenu
           name='menu-outlline' 
           className='mobile-nav-icon' 
           onClick={() => setMenuIcon(true)} 
          />
          <CgClose
           name='close-outline' 
           className='mobile-nav-icon close-outline' 
           onClick={() => setMenuIcon(false)} 
          />
        </div>
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

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name='close-outline'] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
  
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({theme}) => theme.colors.black}
      
    }
    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({theme}) => theme.colors.black}
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 10%;
      right: 10%;
      color: ${({theme}) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s linear;

      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 0.3s linear;
    }

  }
`;

export default Nav;