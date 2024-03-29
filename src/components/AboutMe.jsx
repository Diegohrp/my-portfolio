import React from 'react';
import styled from 'styled-components';
import { titles } from '../GlobalStyles';
import { GoCloudDownload } from 'react-icons/go';
import { LinkButton } from './LinkButton';
const StyledAbout = styled.section`
  transition: background-color 0.3s, border-color 0.3s;
  padding: 30px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .intro__title {
    margin-bottom: 20px;
    h1 {
      font-size: 3rem;
      text-align: center;
      font-family: ${titles};
      color: ${(props) => props.theme.titleColor};
    }
    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme.textColor};
      text-align: center;
      font-style: normal;
    }
  }
  img {
    width: 180px;
    height: 180px;
    border-radius: 20px;
  }
  div {
    width: min(80%, 350px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    text-align: left;
    p {
      font-size: 1.6rem;
      text-align: justify;
      color: ${(props) => props.theme.textColor};
      margin-bottom: 5px;
    }
  }
  /* @media (min-width: 700px) {
    display: grid;
    grid-template: 80px 1fr / repeat(2, 1fr);
    align-items: center;
    column-gap: 80px;
    .intro__title {
      grid-column: 1 / 3;
      justify-self: center;
    }
    img {
      width: 250px;
      height: 200px;
      justify-self: flex-end;
    }
  } */
`;

function AboutMe() {
  return (
    <StyledAbout id='about'>
      <div className='intro__title'>
        <h1>About Me</h1>
        <p>My Introduction</p>
      </div>
      {/* <img src={profile} alt='about me' /> */}
      <div>
        <p>
          I'm a Software developer in Mexico who is looking for a remote job.
        </p>
        {/* <p>I'm also a mechatronics engineer student.</p> */}
        <p>
          I enjoy learning about anything related to programming and technology,
        </p>
        <LinkButton
          href='https://drive.google.com/file/d/1deawn9zvT4JrEjlXrukY1tAhIeun6vcb/view?usp=sharing'
          text='Download CV'
          icon={<GoCloudDownload />}
        />
      </div>
    </StyledAbout>
  );
}
export { AboutMe };
