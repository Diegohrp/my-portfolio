import styled from 'styled-components';
import skill1 from '../assets/icons/html-5.svg';
import skill2 from '../assets/icons/css3.svg';
import skill3 from '../assets/icons/sass.svg';
import skill4 from '../assets/icons/javascript.svg';
import skill5 from '../assets/icons/react.svg';
import skill6 from '../assets/icons/node-js.svg';
import skill7 from '../assets/icons/git.svg';
import skill8 from '../assets/icons/mysql.svg';
import skill9 from '../assets/icons/python.svg';
import skill10 from '../assets/icons/java.svg';
import { titles } from '../GlobalStyles';
const mySkills = [
  { skill: skill1, name: 'HTML' },
  { skill: skill2, name: 'CSS' },
  { skill: skill3, name: 'SASS' },
  { skill: skill4, name: 'JavaScript' },
  { skill: skill5, name: 'React' },
  { skill: skill6, name: 'Node.js' },
  { skill: skill7, name: 'Git' },
  { skill: skill8, name: 'MySQL' },
  { skill: skill9, name: 'Python' },
  { skill: skill10, name: 'Java' },
];

const StyledSkills = styled.section`
  width: 100vw;
  padding-bottom: 50px;
  h1 {
    margin: 30px 0;
    font-size: 3rem;
    font-weight: 700;
    font-family: ${titles};
    color: ${(props) => props.theme.titleColor};
    text-align: center;
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    justify-content: center;
    justify-items: center;
    row-gap: 40px;
    figure {
      width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      &:hover img {
        animation: skillAnim 800ms linear normal;
      }

      @keyframes skillAnim {
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(20deg);
        }
        50% {
          transform: rotate(0deg);
        }
        75% {
          transform: rotate(-20deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      &:hover span {
        transform: translateY(-10px);
        opacity: 0.6;
        transition: transform ease-out 200ms;
      }
      span {
        font-size: 1.6rem;
        color: white;
        background-color: ${(props) => props.theme.accentColor};
        border-radius: 5px;
        width: 120px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(20px);
        opacity: 0;
      }
      span::after {
        position: absolute;
        border: 5px solid transparent;
        border-top-color: ${(props) => props.theme.accentColor};
        content: '';
        left: 50%;
        margin-left: -5px;
        top: 100%;
      }
    }
    img {
      width: 120px;
      height: 120px;
      z-index: 1;
    }
  }

  @media (min-width: 700px) {
    .skills {
      grid-template-columns: repeat(5, 150px);
      column-gap: 40px;
    }
  }
`;
function Skills() {
  return (
    <StyledSkills id='skills'>
      <h1>Skills</h1>
      <div className='skills'>
        {mySkills.map((item) => (
          <figure key={item.name}>
            <span>{item.name}</span>
            <img src={item.skill} alt={item.name} />
          </figure>
        ))}
      </div>
    </StyledSkills>
  );
}

export { Skills };
