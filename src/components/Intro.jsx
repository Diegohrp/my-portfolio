import React from 'react';
import { GoMail } from 'react-icons/go';
import styled from 'styled-components';
import { titles } from '../GlobalStyles';
import { LinkButton } from './LinkButton';
const StyledIntro = styled.section`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    position: relative;
    svg {
      width: 300px;
      height: 250px;
      path {
        fill: ${(props) => props.theme.accentColor};
      }
    }
    img {
      width: 180px;
      height: 180px;
      position: absolute;
      top: calc(50% - 80px);
      right: calc(50% - 103px);
      border-radius: 100%;
    }
  }
  .info {
    width: 300px;
    h1 {
      font-size: 2rem;
      font-family: ${titles};
      color: ${(props) => props.theme.titleColor};
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${(props) => props.theme.textColor};
      text-align: justify;
      margin-bottom: 5px;
    }
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    align-items: center;
    justify-items: flex-start;
  }
  .info {
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    justify-self: flex-end;
    margin-right: 30px;
    h1 {
      text-align: start;
    }
  }
  figure {
    grid-column: 2 / 3;
    margin-left: 30px;
  }
`;

function Intro() {
  return (
    <StyledIntro id='home'>
      <figure>
        <svg viewBox='0 10 200 150' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M69.9,-24.5C77.3,0,60.8,30.6,39.5,43.5C18.2,56.5,-8.1,51.8,-29.9,37C-51.7,22.1,-69.1,-3,-63.4,-25.3C-57.7,-47.6,-28.9,-67,1.2,-67.4C31.3,-67.8,62.5,-49.1,69.9,-24.5Z'
            transform='translate(100 100)'
          />
        </svg>
        <img
          src='https://raw.githubusercontent.com/bedimcode/responsive-portfolio-website-Alexa/main/assets/img/perfil.png'
          alt='profile'
        />
      </figure>
      <div className='info'>
        <h1>Hi, I'm Diego</h1>
        <p>Front-end Developer</p>
        <p>
          Two years of experience creating web apps with React.js and Node.js
        </p>
        <LinkButton href='#contact' text='Contact me' icon={<GoMail />} />
      </div>
    </StyledIntro>
  );
}

export { Intro };
