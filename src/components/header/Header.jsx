import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiMenu, FiSun } from 'react-icons/fi';
import { Menu } from './Menu';
import { titles } from '../../GlobalStyles';

const StyledHeader = styled.header`
  z-index: 10;
  display: flex;
  position: fixed;
  width: 100vw;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  //position: relative;
  padding: 0px 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
  background-color: ${(props) => props.theme.backgroundColor};
  div {
    display: flex;
    height: 60px;
    align-items: center;
  }

  h2 {
    font-size: 1.8rem;
    font-family: ${titles};
    font-weight: 500;
    color: ${(props) => props.theme.titleColor};
    margin-left: 20px;
  }

  button {
    //background-color: transparent;
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 2.2rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.titleColor};
  }

  .colorMode {
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }

  //Media Queries for responsive
  @media (min-width: 700px) {
    //justify-content: space-around;
    padding: 0;
    h2 {
      margin-left: 80px;
    }
    .desktop {
      height: 100%;
      margin-right: 80px;
    }
    .button-menu {
      display: none;
    }
  }
`;

function Header({ onToggleTheme, themeIcon }) {
  const [menu, toggleMenu] = React.useState(false);

  return (
    <StyledHeader>
      <div>
        <button
          id='toggleMenu'
          className='button-menu'
          onClick={() => toggleMenu(!menu)}>
          <FiMenu />
        </button>
        <h2>Diego</h2>
      </div>

      <div className='desktop'>
        <Menu device='desktop' />
        <button className='colorMode' onClick={onToggleTheme}>
          {themeIcon === 'light' && <FiMoon />}
          {themeIcon === 'dark' && <FiSun />}
        </button>
      </div>

      {menu && <Menu device='mobile' />}
    </StyledHeader>
  );
}

export { Header };
