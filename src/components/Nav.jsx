import React from 'react';
import styled from 'styled-components';

import Image from './Image';

import logo from '../images/drinkcast-logo-white.png';

const NavStyled = styled.nav`
  width: calc(100vw - (100vw - 100%));
  min-height: var(--nav-height);
  display: flex;
  background-color: var(--primaryFaded);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 6;

  .links {
    display: flex;
    font-size: 1.6rem;
    flex-direction: row-reverse;
    width: 100%;
    align-items: center;
  }

  .links a {
    padding: 0 1rem;
  }

  a:hover {
    transition: 0.3s ease-in-out;
    color: var(--secondary);
  }
`;

const Nav = () => {
  const getBarName = () => {
    const item = localStorage.getItem('barName');
    const bar = JSON.parse(item);
    return bar.localValue;
  };

  const name = getBarName();
  return (
    <NavStyled>
      <a href='/'>
        <Image src={logo} alt='logo' className='nav-logo' />
      </a>
      <div className='links'>
        {localStorage.getItem('sessionId') && localStorage.getItem('token') ? (
          <a href='/bar'>{name}</a>
        ) : null}
        <a href='/joinbar' className='joinBar'>
          JOIN
        </a>
        <a href='/createbar' classnam='createBar'>
          CREATE
        </a>
      </div>
    </NavStyled>
  );
};
export default Nav;
