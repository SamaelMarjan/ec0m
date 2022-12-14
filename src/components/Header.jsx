import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/' className='p'>E-c0m</NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .p {
    color: blue;
    font-size: 30px;
    font-weight: bold;
  }
`;

export default Header;