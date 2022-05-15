import styled from 'styled-components';
import { texts } from '../../GlobalStyles';
import { IoPersonOutline } from 'react-icons/io5';
import { GoHome, GoFile, GoRepo, GoMail } from 'react-icons/go';
const StyledMenu = styled.nav`
  position: absolute;
  width: 100vw;
  height: 200px;
  top: 51px;
  left: 0;
  z-index: 1;

  ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
    padding-left: 20px;
    background-color: ${(props) => props.theme.menuColor};

    li a {
      font-size: 1.5rem;
      font-family: ${texts};
      text-decoration: none;
      font-weight: 700;
      color: ${(props) => props.theme.titleColor};
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }

      &:hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
  @media (min-width: 700px) {
    display: none;
  }
`;
const StyledMenuDesktop = styled(StyledMenu)`
  display: none;
  @media (min-width: 700px) {
    display: block;
    position: static;
    width: auto;
    height: 100%;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: 30px;
      background-color: transparent;
      li a {
        margin-right: 30px;

        svg {
          display: none;
        }
      }
    }
  }
`;
function Menu({ device, toggleMenu }) {
  if (device === 'mobile') {
    return (
      <StyledMenu>
        <ul>
          <li onClick={() => toggleMenu(false)}>
            <a href='#home'>
              <GoHome />
              Home
            </a>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <a href='#about'>
              <IoPersonOutline />
              About
            </a>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <a href='#skills'>
              <GoFile />
              Skills
            </a>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <a href='#portfolio'>
              <GoRepo />
              Portfolio
            </a>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <a href='#contact'>
              <GoMail />
              Contact me
            </a>
          </li>
        </ul>
      </StyledMenu>
    );
  } else if (device === 'desktop') {
    return (
      <StyledMenuDesktop>
        <ul>
          <li>
            <a href='#home'>
              <GoHome />
              Home
            </a>
          </li>
          <li>
            <a href='#about'>
              <IoPersonOutline />
              About
            </a>
          </li>
          <li>
            <a href='#skills'>
              <GoFile />
              Skills
            </a>
          </li>
          <li>
            <a href='#portfolio'>
              <GoRepo />
              Portfolio
            </a>
          </li>
          <li>
            <a href='#contact'>
              <GoMail />
              Contact me
            </a>
          </li>
        </ul>
      </StyledMenuDesktop>
    );
  }
}

export { Menu };
